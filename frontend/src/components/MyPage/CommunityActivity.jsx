import React, { useState } from "react";
import WithSideLayout from "../common/WithSideLayout";
import CommentCard from "./CommentCard";
import PostCard from "./PostCard";

function CommunityActivity() {
  const headerTitle = "나의 활동";
  const [tab, setTab] = useState(0);
  const postList = [
    {
      id: "0",
      category: ["영어", "외국어"],
      name: "스터디 이름",
      content: "2학기 싸피 프젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다",
      writer: "정미닝",
      date: "29일전",
      hitCount: 192,
      likeCount: 192
    },
    {
      id: "1",
      category: ["영어", "외국어"],
      name: "스터디 이름",
      content: "2학기 싸피 프젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다",
      writer: "정미닝",
      date: "29일전",
      hitCount: 192,
      likeCount: 192
    }
  ];

  const commentList = [
    {
      id: "0",
      name: "스터디 이름",
      content: "2학기 싸피 프젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다",
      writer: "정미닝",
      date: "29일전"
    },
    {
      id: "1",
      name: "스터디 이름",
      content: "2학기 싸피 프젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다",
      writer: "정미닝",
      date: "29일전"
    }
  ];
  return (
    <WithSideLayout title={headerTitle}>
      <div className="my-study-header">
        <button
          className={`my-study-header-item notoMid fs-14 ${
            tab === 0 ? "active" : ""
          }`}
          onClick={() => setTab(0)}
          type="button"
        >
          내가 쓴 글
        </button>
        <button
          className={`my-study-header-item notoMid fs-14 ${
            tab === 1 ? "active" : ""
          }`}
          onClick={() => setTab(1)}
          type="button"
        >
          내가 쓴 댓글
        </button>
        <button
          className={`my-study-header-item notoMid fs-14 ${
            tab === 2 ? "active" : ""
          }`}
          onClick={() => setTab(2)}
          type="button"
        >
          좋아요 한 글
        </button>
      </div>
      {tab === 0 && (
        <div className="post-list">
          {postList.map(post => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      )}
      {tab === 1 && (
        <div className="comment-list">
          {commentList.map(comment => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </div>
      )}
      {tab === 2 && (
        <div className="post-list">
          {postList.map(post => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      )}
    </WithSideLayout>
  );
}
export default CommunityActivity;
