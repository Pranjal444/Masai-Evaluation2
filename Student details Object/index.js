function CreateStudent(name, roll_no, classs, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classs = classs;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        // Create an array of subjects with their corresponding marks
        const subjects = [
            { subject: 'Science', marks: this.marks_of_5_subjects.science },
            { subject: 'Social Science', marks: this.marks_of_5_subjects.social_science },
            { subject: 'Maths', marks: this.marks_of_5_subjects.maths },
            { subject: 'English', marks: this.marks_of_5_subjects.english },
            { subject: 'Hindi', marks: this.marks_of_5_subjects.hindi }
        ];

        // Sort the subjects based on marks in descending order
        subjects.sort((a, b) => b.marks - a.marks);

        // Print the top 3 highest marks subjects
        console.log("  TOP 3 HIGHEST MARKS SUBJECTS       ");
    
        for (let i = 0; i < 3; i++) {
            console.log(` ${i + 1}. ${subjects[i].subject}: ${subjects[i].marks} `);
        }
  
    }

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}    |`);
        console.log(`| Roll no. - ${this.roll_no}       |`);
        console.log(`| Class    - ${this.classs}       |`);
        console.log(`| Section  - ${this.section}       |`);
        console.log(`| Science  - ${this.marks_of_5_subjects.science}      |`);
        console.log(`| S.Sc     - ${this.marks_of_5_subjects.social_science}      |`);
        console.log(`| Maths    - ${this.marks_of_5_subjects.maths}      |`);
        console.log(`| English  - ${this.marks_of_5_subjects.english}      |`);
        console.log(`| Hindi    - ${this.marks_of_5_subjects.hindi}      |`);
        console.log(`| Percentage - ${((this.marks_of_5_subjects.science + this.marks_of_5_subjects.social_science + this.marks_of_5_subjects.maths + this.marks_of_5_subjects.english + this.marks_of_5_subjects.hindi) / 500) * 100} %    |`);
        console.log("+--------------------+");
    }
}

function Marks_of_5_subjects(science, maths, social_science, english, hindi) {
    this.science = science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
}

// Example usage:
const studentMarks = new Marks_of_5_subjects(85, 90, 78, 92, 88);
const student = new CreateStudent(" Huzaifa", "16 ", "X ", "A", studentMarks);
student.printTop3Subjects();
console.log(); // Add a newline for better readability
student.printReportCard();
