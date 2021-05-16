import styles from "./Carousel.module.css";

interface CarouselProps {
    title: string;
    children: any;
}

export default function Carousel({ title, children }: CarouselProps) {
    return <section>
        <h2 className={styles.title}>{title}</h2>
        <section className={styles.carousel}>
            {children}
        </section>
    </section>
}