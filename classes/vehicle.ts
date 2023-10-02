interface BaseVehicle {
    fuelConsumption(): void;
    fuelLevel(): number;
    startEngine(): void;
    refueling(): void;
    getModel(): string;
    getVendor(): string;
}

class Car implements BaseVehicle {
    private model: string;
    private vendor: string;
    private fuel: number;
    private isEngine: boolean;

    constructor(model: string, vendor: string) {
        this.model = model;
        this.vendor = vendor;
        this.fuel = 0;
        this.isEngine = false;
    }

    fuelConsumption(): void {
        if (this.isEngine && this.fuel > 0) {
            this.fuel -= 1; 
        } else if (this.isEngine) {
            this.stopEngine(); 
        }
    }

    fuelLevel(): number {
        return this.fuel;
    }

    startEngine(): void {
        if (!this.isEngine) {
            this.isEngine = true;
            setInterval(() => {
                this.fuelConsumption();
            }, 1000); 
        }
    }

    refueling(): void {
        this.fuel = 100; 
    }

    getModel(): string {
        return this.model;
    }

    getVendor(): string {
        return this.vendor;
    }

    stopEngine(): void {
        this.isEngine = false;
    }
}


const versa = new Car("Versa", "Nissan");
console.log(`Current Fuel Level: ${versa.fuelLevel()}`);
versa.refueling();
console.log(`Current Fuel Level: ${versa.fuelLevel()}`);
versa.startEngine();
setTimeout(() => {
    console.log(`Current Fuel Level: ${versa.fuelLevel()}`);
    versa.stopEngine();
}, 5000);
