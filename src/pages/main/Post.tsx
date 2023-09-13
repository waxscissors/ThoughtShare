import { Post as IPost } from "./Home";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export interface Props {
  post: IPost;
}

export default function Posts(props: Props) {
  const { post } = props;
  const [user] = useAuthState(auth);

  const deleteUser = async (userId: string) => {
    const userDoc = doc(db, "posts", userId);
    await deleteDoc(userDoc);
  };

  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
      }}>
      <div className="p-3">
        <h5>{post.topic}</h5>
        <p>{post.description}</p>
        <p>
          <span className="text-primary">
            {post.userId === user?.uid ? (
              <img
                src={user.photoURL || ""}
                width="20px"
                height="20px"
                alt=""
              />
            ) : null}
            <b>{post.username}</b>
          </span>
        </p>
      </div>
    </div>
  );
}
