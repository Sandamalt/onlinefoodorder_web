import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
import Image from "next/image";
>>>>>>> f7c3cf3 (final with fix bugs)
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7c3cf3 (final with fix bugs)
      <div className={styles.img}>
        <Image
          src="/../public/img/admin4.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper}>
        <h1>Admin Login</h1>
<<<<<<< HEAD
=======
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
>>>>>>> f7c3cf3 (final with fix bugs)
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
