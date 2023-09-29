import ApplyButton from "@/app/components/careers/Button";
import styles from "../Careers.module.css";
type jobCardProps = {
  cardData: {
    id: number;
    title: string;
    location: string;
    description: string;
  };
};
function JobCard({ cardData }: jobCardProps) {
  return (
    <section className={styles.jobCard}>
      <h1 className={styles.title}>{cardData.title}</h1>
      <section>
        <span>{cardData.location}</span>
        <p>{cardData.description}</p>
      </section>
      <ApplyButton
        CustomStyles={{
          paddingTop: "3rem",
          border: "none",
          paddingLeft: "0rem",
        }}
      >
        Apply Now
      </ApplyButton>
    </section>
  );
}

export default JobCard;
