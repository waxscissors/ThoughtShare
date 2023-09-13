import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  topic: string;
  description: string;
}

export const Form = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    topic: yup.string().required("Your topic is required").min(5).max(15),
    description: yup
      .string()
      .required("A description is required")
      .min(10)
      .max(60),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const onSubmit = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <div className="container p-5">
      <div
        className="container p-5 border"
        style={{ width: "fit-content", borderRadius: "15px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            style={{ width: "200px" }}
            type="text"
            placeholder="Topic, Ex...Weather"
            {...register("topic")}
          />
          <p style={{ color: "red" }}>{errors.topic?.message}</p>
          <textarea
            className="form-control"
            style={{
              width: "200px",
              height: "50px",
              resize: "none",
            }}
            placeholder="Ex...It is raining today "
            {...register("description")}
          />
          <p style={{ color: "red" }}>{errors.description?.message}</p>
          <input className="btn btn-primary" type="submit" />
          <div className="p-3">
            <p>
              <b>Note: </b>For topic, please write miniumum 5 characters and
              maximum 15 characters. For description, please write miniumum 10
              characters and maximum 60 characters.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
