import Mattress from "./Mattress";

export const typeOfMattresses = {
    "classic": "classic",
    "loom": "loom",
    "zen": "zen",
}

class MattressType {
    mattress: Mattress;
    type: string;

    constructor() {
        this.mattress = new Mattress();
        this.type = "type";
    }

    get_Mattress(): Mattress {
        return this.mattress;
    }

    set_Mattress(mattress: Mattress): void {
        this.mattress = mattress;
    }

    get_Type(): string {
        return this.type;
    }

    set_Type(type: string): void {
        this.type = type;
    }
}

export default MattressType;