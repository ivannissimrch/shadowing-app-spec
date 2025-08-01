import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { Lesson } from "../Types";

export default function Card({ lesson }: { lesson: Lesson }) {
  const { title, image, lessonId } = lesson;
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Image
          src={`/images/${image}.png`}
          alt="ESL lesson"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <Link href={lessonId} className={styles.button}>
          Start Practicing
        </Link>
      </div>
    </div>
  );
}
