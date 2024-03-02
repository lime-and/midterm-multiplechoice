import java.util.Scanner;

public class Quiz1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] questions = {
            "What does VAT stand for?",
            "According to the text, who pays the VAT to the Revenue Department?",
            "Which of the following transactions is NOT subject to VAT in Thailand?",
            "Under what circumstances is an offshore operator liable to VAT in Thailand?",
            "What constitutes the tax point for the sale of goods according to section 78(1)?",
            "What is included in the tax base for the sale of goods or provision of services?",
            "What is the VAT rate in Thailand according to section 80?",
            "Which of the following transactions qualifies for zero-rated VAT?",
            "Who is exempt from VAT according to section 81?"
        };
        String[][] options = {
            {"A) Value Added Tax", "B) Variable Annual Tax", "C) Vendor Assessment Test", "D) Value Assessment Test"},
            {"A) End User", "B) Manufacturer", "C) Wholesaler", "D) Retailer"},
            {"A) Import of Goods", "B) Sale of educational services", "C) Provision of legal services", "D) Sale of agricultural products"},
            {"A) Selling goods or rendering services in Thailand on a temporary basis without VAT registration",
             "B) Providing E-Services to a VAT registrant in Thailand",
             "C) Providing other services to any users in Thailand",
             "D) All of the above"},
            {"A) Delivery of goods", "B) Transfer of ownership in goods", "C) Receipt of payment of goods", "D) All of the above"},
            {"A) Money", "B) Property", "C) Compensation", "D) All of the above"},
            {"A) 5%", "B) 7%", "C) 10%", "D) 15%"},
            {"A) Export of goods", "B) Sale of goods to a local government authority", "C) Domestic transportation services", "D) Lease of immovable property"},
            {"A) Enterprises with an annual turnover not exceeding THB1,800,000",
             "B) Businesses listed by the Royal Decree",
             "C) Local government authorities",
             "D) All of the above"}
        };
        String[] answers = {"A", "B", "B", "C", "D", "D", "D", "B", "A", "D"};

        int score = 0;

        for (int i = 0; i < questions.length; i++) {
            System.out.println(questions[i]);
            for (String option : options[i]) {
                System.out.println(option);
            }
            System.out.print("Enter your answer (A, B, C, or D): ");
            String userAnswer = scanner.nextLine().toUpperCase();
            if (userAnswer.equals(answers[i])) {
                System.out.println("Correct!");
                score++;
            } else {
                System.out.println("Incorrect. The correct answer is " + answers[i] + ".");
            }
        }

        System.out.println("Your score: " + score + " out of " + questions.length);
    }
}
