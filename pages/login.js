import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useStore } from "../store";
import { strapi } from "../utils";

export default function LoginPage() {
  const { setUser } = useStore((state) => state);
  const [error, setError] = useState();

  useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit({ identifier, password }) {
    try {
      const { user, jwt } = await strapi.login({
        identifier,
        password,
      });
      setUser({
        user,
        jwt,
      });
      setAuth(true);
    } catch (error) {
      setError(error.message.message);
    }
  }

  return (
    <div className="p-10 w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card rounded shadow-lg bg-white">
        <div className="card-body">
          <div className="card-title">Login</div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                className="input input-primary"
                type="text"
                placeholder="username"
                {...register("identifier", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.identifier?.type === "require" && (
                <div>username required</div>
              )}
              {errors.username?.type === "minLength" && (
                <div className="text-red-600 text-xs font-medium">
                  username minimal length 10
                </div>
              )}
            </div>
            <div>
              <input
                className="input input-primary"
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "minLength" && (
                <div className="text-red-600 text-xs font-medium">
                  password minimal length 10
                </div>
              )}
              {errors.password?.type === "required" && (
                <div className="text-red-600 text-xs font-medium">
                  password is required
                </div>
              )}
            </div>
            <button className="btn btn-primary btn-block ">login</button>
            {error && (
              <div className="text-xs text-center text-red-500">{error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
