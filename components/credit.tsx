"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/credit.module.css";

interface ICreditProps {
    character: string;
    original_name: string;
    profile_path: string;
}

export default function Credit({character, original_name, profile_path}: ICreditProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`https://www.google.com/search?q=${original_name}`);
    };

    return (
        <div className={styles.credit}>
            <img src={profile_path} alt={original_name} onClick={onClick} />
            <h4>{original_name}d</h4>
            <h4>{character}</h4>
        </div>    
    );
}