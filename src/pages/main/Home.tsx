import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";

export interface Post {
  topic: string;
  description: string;
  username: string;
  userId: string;
  id: string;
}

export default function Home() {
  const [user] = useAuthState(auth);
  const postRef = collection(db, "posts");
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="container-fluid p-3">
        {!user ? (
          <div className="p-5">
            <div
              className="container-fluid bg-dark p-5"
              style={{ color: "white" }}>
              <h1>Please login to View and Create Posts!!</h1>
            </div>
          </div>
        ) : (
          <div>
            <h1>Welcome to the Posts, {user?.displayName}</h1>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row">
          {postsList?.map((post, key) => (
            <div className="col p-3">
              <Post key={key} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
