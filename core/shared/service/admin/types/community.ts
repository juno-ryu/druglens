import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { PostCommentFilterInput } from '@/core/shared/service/input/community-input/post-comment-filter-input';
import { PostFilterInput } from '@/core/shared/service/input/community-input/post-filter-input';
import { PostTagFilterInput } from '@/core/shared/service/input/community-input/post-tag-filter-input';

export type CommunitiesSearchFilter = PostFilterInput & PageableInput;
export type CommunitiesCommentsSearchFilter = PostCommentFilterInput & PageableInput;
export type CommunitiesTagsSearchFilter = PostTagFilterInput & PageableInput;
