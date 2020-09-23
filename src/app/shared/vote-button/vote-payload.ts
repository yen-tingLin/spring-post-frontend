import { VoteType } from './vote-type';

export interface VotePayload {
    postId: number;
    voteType: VoteType;
    userName: string;
}