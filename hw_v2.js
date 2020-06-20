'use strict';

var Person = function(id, firstName, lastName, birthDate) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthDate = birthDate;

    this.id = function() {
        return this._id;
    }

    this.firstName = function() {
        return this._firstName;
    }

    this.lastName = function() {
        return this._lastName;
    }

    this.birthDate = function() {
        return this._birthDate;
    }
}

var Employee = function(id, firstName, lastName, birthDate, salary) {
    Person.call(id, firstName, lastName, birthDate);

    this._salary = salary;

    this.salary = function() {
        return this._salary;
    }

    this.promote = function(newSalary) {
        this._salary = newSalary;
    }

    this.fire = function() {
        this._salary = 0;
    }
}

var Student = function(id, firstName, lastName, birthDate, scholarship) {
    Person.call(id, firstName, lastName, birthDate);

    this._scholarship = scholarship;

    this.scholarship = function() {
        return this._scholarship;
    }

    this.evaluateStudent = function() {
        if (this._scholarship >= 9000) {
            return "This student has a grade point average higher than 9.5";
        } else if (this._scholarship >= 700) {
            return "This student has a grade point average higher than 9.3";
        } else {
            return "The grade point average is less than 9.3";
        }
    }
}

var Teacher = function(id, firstName, lastName, birthDate, salary, subject) {
    Employee.call(id, firstName, lastName, birthDate, salary);

    this._subject = subject;

    this.subject = function() {
        return this._subject;
    }
}

var Administrator = function(id, firstName, lastName, birthDate, salary, department) {
    Employee.call(id, firstName, lastName, birthDate, salary);

    this._department = department;

    this.department = function() {
        return this._department;
    }
}

var ProDean = function(id, firstName, lastName, birthDate, salary, year) {
    Employee.call(id, firstName, lastName, birthDate, salary);

    this._year = year;

    this.year = function() {
        return this._year;
    }
}

var DepartmentHead = function(id, firstName, lastName, birthDate, salary, subject, department) {
    Teacher.call(id, firstName, lastName, birthDate, salary, subject);

    this._department = department;

    this.department = function() {
        return this._department;
    }
}

var Dean = function(id, firstName, lastName, birthDate, salary, year, ) {
    ProDean.call(id, firstName, lastName, birthDate, salary, year);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype = { constructor: Employee};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Teacher.prototype = Object.create(Employee.prototype);
Teacher.prototype.constructor = Teacher;
Administrator.prototype = Object.create(Employee.prototype);
Administrator.prototype.constructor = Administrator;
ProDean.prototype = Object.create(Employee.prototype);
ProDean.prototype.constructor = ProDean;
DepartmentHead.prototype = Object.create(Teacher.prototype);
DepartmentHead.prototype.constructor = DepartmentHead;
Dean.prototype = Object.create(ProDean.prototype);
Dean.prototype.constructor = Dean;