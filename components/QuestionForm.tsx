import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

interface QuestionFormProps {
  questions: string[];
  currentQuestion: number;
  setCurrentQuestion: (num: number) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleDoneClick = () => {
    // Handle submission logic here
    router.push("/goal-settings/summary");
    console.log("Answers:", answers);
  };

  const calculateProgress = () =>
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      <div className="flex flex-col justify-center min-h-3/4">
        <p className="mb-4 h-10">{questions[currentQuestion]}</p>
        <input
          type="text"
          value={answers[currentQuestion]}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div className="absolute bottom-20 w-full right-0 left-0 mx-auto px-4">
        <div className="flex w-full">
          <div className="relative w-full">
            <div>Pertanyaan {currentQuestion + 1} dari 2</div>
            <div className="overflow-hidden h-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${calculateProgress()}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNextClick}
              radius="sm"
              color="primary"
              variant="solid"
            >
              Selanjutnya
            </Button>
          ) : (
            <Button
              onClick={handleDoneClick}
              className="text-white"
              color="success"
              variant="solid"
              radius="sm"
            >
              Selesaikan
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
