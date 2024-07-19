import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { IPost } from '../interfaces';

export const usePosts = (isAuth: boolean) => {
    const getData = async () => {
        const { data } = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
        return data;
    };

    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: getData,
        enabled: isAuth, // if you are not authorized, the request will not be executed
    });

    return { posts, isLoading }
}