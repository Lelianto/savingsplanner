import QuestionForm from "../../../components/QuestionForm";
import Layout from "../../../components/Layout";
import { useCallback, useState } from "react";

const questions = [
  "Berapa nilai kebutuhan masa depan yang ingin kamu siapkan?",
  "Kapan kebutuhan ini akan dicairkan?",
];

const GoalQuestionForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const back = useCallback(() => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(0);
    }
  }, [currentQuestion]);
  return (
    <Layout title="Tujuan Investasi" back={back}>
      <div className="container mx-auto px-4 relative min-h-screen">
        <QuestionForm
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div>
    </Layout>
  );
};

export default GoalQuestionForm;
