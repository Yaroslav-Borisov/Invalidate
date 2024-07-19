import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { IPost } from '../interfaces';

export const usePost = (id: number) => {
    const getPostById = async (id: number) => {
        const { data } = await axios.get<IPost>(`${id}`);
        return data;
    };

    const { data: post, isLoading } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPostById(id),
    });

    return { post, isLoading }
}