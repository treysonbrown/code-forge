from sqlmodel import Field, SQLModel, create_engine, table, Relationship


class User(SQLModel): 
    id: int | None = Field(default=None, primary_key=True)
    name: str
    email: str

class Teacher(User, table=True):
    classes: list["Course"] = Relationship(back_populates="course")

class StudentCourseLink(SQLModel, table=True):
    student_id: int = Field(foreign_key="student.id", primary_key=True)
    course_id: int = Field(foreign_key="course.id", primary_key=True)

class Student(User, table=True):
    enrolled_classes: list["Course"] = Relationship(link_model=StudentCourseLink)
    problems_solved: int
    points: int

class Problem(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    question: str
    description: str
    difficulty: int
    answers: list["Answer"] = Relationship(back_populates="problem")
    course_id: int = Field(foreign_key="course.id")
    course: "Course" = Relationship(back_populates="course")

class Answer(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    answer: str
    is_correct: bool = Field(default=False)
    problem_id: int = Field(foreign_key="problem.id")
    problem: Problem = Relationship(back_populates="answers")


class Course(User, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    teacher_id: int = Field(foreign_key="teacher.id")
    teacher: Teacher = Relationship(back_populates="teacher")
    students: list[Student] = Relationship(link_model=StudentCourseLink)
    problem: list[Problem] = Relationship(back_populates="problem")



