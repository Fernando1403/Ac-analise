class McLancheAlegre {
    constructor(carne,queijo,batataPequena,fruta){
        this.carne = 1;
        this.queijo = queijo;
        this.batataPequena = batataPequena;
        this.fruta = fruta;
    }
}

class BigLanche {
    constructor(carne,alface, queijo, molhoBacana, cebola, picles,pao){
        this.carne = 2 ;
        this.alface = alface;
        this.queijo = queijo;
        this.molhoBacana = molhoBacana;
        this.cebola = cebola;
        this.picles = picles;
        this.pao = pao;
    }

    combo(batatamedia,bebida){
        this.batatamedia = batatamedia;
        this.bebida = CocaGlue;
    }
}

class McHen {
    constructor(hambúrguerdefrango, alface, queijo,picles){
        this.hambúrguerdefrango = hambúrguerdefrango;
        this.alface = alface;
        this.queijo = queijo;
        this.picles = picles;
    }

    combo(batatamedia,bebida){
        this.batatamedia = batatamedia;
        this.bebida = CocaGlue;
    }
}

class lanche extends McLancheAlegre,BigLanche,McHen{
    constructor(McLancheAlegre,BigLanche,McHen){
        this.combo = option;
    }
}