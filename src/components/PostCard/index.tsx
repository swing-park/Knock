import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Post } from "types";

const PostCard = (post: Post) => {
  const navigate = useNavigate();

  return (
    <StPostCardBox onClick={() => navigate(`/post/${post.id}`)}>
      <StKeyWordsWrapper>
        {post.keywords.map((keyword) => (
          <StKeyWord key={keyword}>{keyword}</StKeyWord>
        ))}
      </StKeyWordsWrapper>
      <StTitle>
        {post.title.length > 100 ? post.title.slice(0, 99) + "..." : post.title}
      </StTitle>
      <StContent>
        {post.content.length > 100
          ? post.content.slice(0, 99) + "..."
          : post.content}
      </StContent>
      <StPostCardFooter>
        <div>{post.createdAt}</div>
        <div>{post.commentCount}개의 댓글</div>
        {/* TODO: post.isEdit &&  <CircularProgress size={13} /> */}
        {true && <CircularProgress size={13} />}
      </StPostCardFooter>
    </StPostCardBox>
  );
};

export default PostCard;

const StPostCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid gainsboro;
  cursor: pointer;
`;

const StKeyWordsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StKeyWord = styled.div`
  background-color: blue;
  color: white;
  padding: 5px;
  border-radius: 50px;
`;

const StTitle = styled.div`
  font-size: 1.5rem;
`;

const StContent = styled.div``;

const StPostCardFooter = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.75rem;
`;