import { TTodo } from "@customtypes/index";
import { useMutation, useQueryClient, QueryKey } from "@tanstack/react-query";
import axios from "axios";


const API_URL = 'https://jsonplaceholder.typicode.com';


interface MutationContext {
  optimisticTodo: TTodo;
  previousQueries: [QueryKey, TTodo[] | undefined][];
}

export const addTodo = async (newTodo: Omit<TTodo, 'id'> ): Promise<TTodo> => {
  const { data } = await axios.post<TTodo>(`${API_URL}/todos`, newTodo);
  return data;
};

const useAddTodo = () => {
    const queryClient = useQueryClient();

    return useMutation<TTodo, Error, Omit<TTodo, 'id'>, MutationContext>({
        mutationFn: addTodo,
        
        onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos'] });

            const optimisticTodo: TTodo = {
                id: Date.now(), 
                ...newTodo,
            };

            const allTodoQueries = queryClient.getQueriesData<TTodo[]>({ queryKey: ['todos'] });
            
            allTodoQueries.forEach(([queryKey, data]) => {
                if (data && Array.isArray(data)) {
 
                    queryClient.setQueryData<TTodo[]>(queryKey, (old) => {
                        if (!old) return [optimisticTodo]; 
                        
                        const newArray = [optimisticTodo, ...old];
                        return newArray.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
                    });
                }
            });

            return { optimisticTodo, previousQueries: allTodoQueries };
        },

        onSuccess: (data, _, context) => {
            if (context) {
              const { optimisticTodo } = context;

              context.previousQueries.forEach(([queryKey]) => {
      
                  queryClient.setQueryData<TTodo[]>(queryKey, (old) => {
                      if (old) {
                          return old.map(todo => 
                              todo.id === optimisticTodo.id 
                                  ? data 
                                  : todo
                          );
                      }
                      return []; 
                  });
              });
            }
        },

        onError: (_, __, context) => {
            if (context) {
                if (context.previousQueries) {
                    context.previousQueries.forEach(([queryKey, previousData]) => {
                        queryClient.setQueryData(queryKey, previousData);
                    });
                }
            }

        },


        onSettled: () => {
    
        },
    });
};

export default useAddTodo;