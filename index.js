
var vehicle1 = new Object();
vehicle1.color = "red";
vehicle1.maxSpeed = 230;
vehicle1.driver = new Object();
vehicle1.driver.name = "[Небилович В.В.]";
vehicle1.driver.category = "C";
vehicle1.driver["personal limitations"] = "No driving at night";
vehicle1.tuning = true;
vehicle1["number of accidents"] = 0;

// 1.2.4: Створення об'єкта vehicle2 через літерал
var vehicle2 = {
    color: "blue",
    maxSpeed: 190,
    driver: {
        name: "[Твоє Прізвище та Ініціали]",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

// 1.2.5 - 1.2.6: Додавання методів drive
vehicle1.drive = function() {
    console.log("I am not driving at night");
};

vehicle2.drive = function() {
    console.log("I can drive anytime");
};

// Перевірка методів drive
vehicle1.drive();
vehicle2.drive();

// 1.2.7 - 1.2.9: Конструктор Truck, метод AssignDriver через prototype та trip
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
            return;
        }

        var message = "Driver " + this.driver.name;
        if (this.driver.nightDriving) {
            message += " drives at night";
        } else {
            message += " does not drive at night";
        }
        message += " and has " + this.driver.experience + " years of experience";

        console.log(message);
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10: Демонстрація створення вантажівок та запуску trip
var heavyTruck = new Truck("white", 8000, 80.0, "Volvo", "FH16");
var lightTruck = new Truck("black", 4500, 85.5, "Mercedes-Benz", "Actros");

heavyTruck.AssignDriver("[Твоє Прізвище та Ініціали]", true, 7);
lightTruck.AssignDriver("Олексій Коваленко", false, 3);

heavyTruck.trip();
lightTruck.trip();



// 1.2.12 - 1.2.15: Клас Square
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log;
    }

    length() {
        const perim = 4 * this.a;
        console.log(`Периметр квадрата: ${perim}`);
        return perim;
    }

    square() {
        const area = Math.pow(this.a, 2);
        console.log(`Площа квадрата: ${area}`);
        return area;
    }

    info() {
        console.log("--- Інформація про Квадрат ---");
        console.log(`Сторони: a = ${this.a}, b = ${this.a}, c = ${this.a}, d = ${this.a}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this._b = b;
    }

    // 1.2.22: Геттери та сеттери для Rectangle
    get a() { return this._a; }
    set a(val) { this._a = val; }

    get b() { return this._b; }
    set b(val) { this._b = val; }

    static help() {
        console.log;
    }

    length() {
        const perim = 2 * (this.a + this.b);
        console.log(`Периметр прямокутника: ${perim}`);
        return perim;
    }

    square() {
        const area = this.a * this.b;
        console.log(`Площа прямокутника: ${area}`);
        return area;
    }

    info() {
        console.log("--- Інформація про Прямокутник ---");
        console.log(`Сторони: a = ${this.a}, b = ${this.b}, c = ${this.a}, d = ${this.b}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

// 1.2.18 - 1.2.19: Клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log;
    }

    length() {
        const perim = 4 * this.a;
        console.log(`Периметр ромба: ${perim}`);
        return perim;
    }

    square() {
        const rad = (this.beta * Math.PI) / 180;
        const area = Math.pow(this.a, 2) * Math.sin(rad);
        console.log(`Площа ромба: ${area.toFixed(2)}`);
        return area;
    }

    info() {
        console.log("--- Інформація про Ромб ---");
        console.log(`Сторони: 4 сторони по ${this.a}`);
        console.log(`Кути: тупі = ${this.alpha}°, гострі = ${this.beta}°`);
        this.length();
        this.square();
    }
}

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log;
    }

    length() {
        const perim = 2 * (this.a + this.b);
        console.log(`Периметр паралелограма: ${perim}`);
        return perim;
    }

    square() {
        const rad = (this.beta * Math.PI) / 180;
        const area = this.a * this.b * Math.sin(rad);
        console.log(`Площа паралелограма: ${area.toFixed(2)}`);
        return area;
    }

    info() {
        console.log("--- Інформація про Паралелограм ---");
        console.log(`Сторони: a = ${this.a}, b = ${this.b}`);
        console.log(`Кути: тупі = ${this.alpha}°, гострі = ${this.beta}°`);
        this.length();
        this.square();
    }
}

// 1.2.23: Викликаємо static help()
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24: Створення об'єктів та виклик info()
const mySquare = new Square(6);
const myRect = new Rectangle(5, 10);
const myRhombus = new Rhombus(8, 120, 60);
const myParallelogram = new Parallelogram(6, 12, 135, 45);

mySquare.info();
myRect.info();
myRhombus.info();
myParallelogram.info();



// 1.2.25 - 1.2.26: Функція Triangular із деструктуризацією
function Triangular(props = {}) {
    const { a = 3, b = 4, c = 5 } = props;
    return { a, b, c };
}

console.log(Triangular()); // Значення за замовчуванням
console.log(Triangular({ a: 7, b: 24, c: 25 }));
console.log(Triangular({ a: 9, b: 12, c: 15 }));

// 1.2.27 - 1.2.28: Замикання PiMultiplier
function PiMultiplier(multiplier) {
    return function() {
        return Math.PI * multiplier;
    };
}

const doublePi = PiMultiplier(2);
const twoThirdsPi = PiMultiplier(2 / 3);
const halfPi = PiMultiplier(0.5);

console.log("2 * π =", doublePi());
console.log("(2/3) * π =", twoThirdsPi());
console.log("π / 2 =", halfPi());

function Painter(color) {
    return function(targetObj) {
        if (targetObj && targetObj.hasOwnProperty("type")) {
            console.log(`[Painter] Колір: ${color}, Тип об'єкта: ${targetObj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

// Тестові об'єкти з таблиці 12
const testObj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const testObj2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const testObj3 = { maxSpeed: 180, color: "purple", isCar: true };

// Демонстрація роботи
PaintBlue(testObj1);
PaintRed(testObj2);
PaintYellow(testObj3);
