const api = {
    _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 },
      { id: 3, name: 'Bob', salary: 80000 },
    ],
  
    getEmployees() {
      return new Promise((resolve) => {
        resolve(this._employees.slice());
      });
    },
  
    setEmployeeSalary(employeeId, newSalary) {
      return new Promise((resolve) => {
        const updatedEmployees = this._employees.map((employee) =>
          employee.id !== employeeId
            ? employee
            : {
              ...employee,
              salary: newSalary,
            }
        );
        this._employees = updatedEmployees;
        resolve(this._employees.find(({ id }) => id === employeeId));
      });
    },
  
    notifyEmployee(employeeId, text) {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  
    notifyAdmin(error) {
      return new Promise((resolve) => {
        resolve();
      });
    },
  
    setEmployees(newEmployees) {
      return new Promise((resolve) => {
        this._employees = newEmployees;
        resolve();
      });
    },
  
    sendBudgetToAccounting(newBudget) {
      return new Promise((resolve) => {
        resolve();
      });
    },
};

async function increaseSalary() {
    const users = await api.getEmployees();
    const salariesTotal = users.reduce((ac, user) => {
        const {salary} = user;
        return ac += salary;
    }, 0)
    const midSalary = salariesTotal / users.length
    const sucessedPromotion = [];
    for (let user of users){
        const {id, salary, name} = user; 
        if (salary < midSalary) {
            try {
                const newSalary = salary*1.2
                const result = await api.setEmployeeSalary(id, newSalary);
                const notification = await api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${newSalary}!`);
                if (notification === true) {
                    sucessedPromotion.push(result);
                } else {
                    throw error;
                }
            } catch (error) {
                const noficationAdmin = await api.notifyAdmin(error); 
            }

        } else {
            try {
                const newSalary = salary*1.1
                const result = await api.setEmployeeSalary(id, newSalary);
                const notification = await api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${newSalary}!`);
                if (notification === true) {
                    sucessedPromotion.push(result);
                } else {
                    throw error;
                }
            } catch (error) {
                const noficationAdmin = await api.notifyAdmin(error); 
            }
        }
    }
    console.log(sucessedPromotion);
    
    const salariesAfterPromotion = sucessedPromotion.reduce((ac, user) => {
        const {salary} = user;
        return ac +=salary;
    }, 0)
    const newBudget = await api.sendBudgetToAccounting(salariesAfterPromotion);
    return sucessedPromotion.length;
}

console.log(increaseSalary().then((res) => console.log(res)));

// api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. 
                                              //Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку
// api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП

// Давайте доработаем нашу функцию увеличения зарплат, но теперь будем увеличивать ЗП всем сотрудникам 
// и добавим к ней дополнительный функционал.
// Теперь будем использовать функционал async/await для решения этой задачи.

// Вам нужно написать функцию, которая:

// - Получает данные по всем работникам +++++
// - Считаем среднее-арифметическое по ЗП +++++
// - Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10% +++++
// - Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП тектом: 
// - Hello, <имя>! Congratulations, your new salary is <новая ЗП>! +++++
// - Если запрос завершился неудачей - отправлять данные ошибки администратору +++++
// - По итогу отправить суммарное ЗП работников после повышения в бухгалтерию
// - Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

// Все функции для получения/изменения данных асинхронны и возвращают промисы.