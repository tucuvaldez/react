import malbec from './assets/los-haroldos-estate-malbec-mrbeef.jpg'

class Vino {
    constructor(marca, tipoVino, varietal, precio, img, id, stock) {
        this.marca = marca
        this.tipoVino = tipoVino
        this.varietal = varietal
        this.precio = precio
        this.img = img
        this.id = id
        this.stock = stock
    }
}

export const listaVino = [
    new Vino("Los Haroldos", "tinto", "Malbec", 1200, malbec, 1, 15),
    new Vino("Los Haroldos", "tinto", "Cabernet Sauvignon", 900, "./assets/Los-haroldos-cabernet.png", 2, 10),
    new Vino("Los Haroldos", "tinto", "Bonarda", 1100, "./assets/Los-Haroldos-Bonarda.png", 3, 12),
    new Vino("Los Haroldos", "blanco", "Chardonnay", 700, "./assets/los-haroldos-chardonnay.png", 4, 22),
    new Vino("Los Haroldos", "blanco", "Chenin Dulce", 900, "./assets/los-haroldos-chenindulce.png", 5, 6),
    new Vino("El Esteco - Don David", "tinto", "Syrah", 950, "./assets/el-esteco-syrah.jpg", 6, 9),
    new Vino("Santa Julia", "blanco", "Tardío", 800, "./assets/Vino-Santa-Julia-Cosecha.jpg", 7, 12),
    new Vino("Las Perdices", "tinto", "Malbec", 1300, "./assets/las-perdices-malbec.png", 8, 24),
    new Vino("Las Perdices", "tinto", "Cabernet Sauvignon", 1250, "./assets/las-perdices-cabernet.png", 9, 12),
    new Vino("Las Perdices", "tinto", "Cabernet Franc", 1150, "./assets/las-perdices-cabernetFranc.png", 10, 16),
    new Vino("Las Perdices", "blanco", "Viognier", 1200, "./assets/perdices-viognier.jpg", 11, 18),
    new Vino("Las Perdices", "blanco", "Sauvignon Blanc", 900, "./assets/sauvignon-blanc.png", 12, 18),
    new Vino("Las Perdices", "blanco", "Sweety", 1100, "./assets/las-perdices-sweety.png", 13, 20),
    new Vino("Rutini", "blanco", "Chardonnay", 1300, "./assets/Rutini_Chardonnay.jpeg", 14, 12),
    new Vino("Alamos", "tinto", "Cabernet", 1500, "./assets/alamos-cabernet.jpg", 15, 10),
    new Vino("Alamos", "tinto", "Malbec Reserva", 1400, "/alamos-malbec.png", 16, 6),
    new Vino("Alamos", "blanco", "Torrontes", 1350, "./assets/alamos-torrontes.png", 17, 4),
    new Vino("Alamos", "blanco", "Semillon", 1250, "./assets/alamos-chardonnay.jpg", 18, 3),
    new Vino("El Esteco", "tinto", "Cabernet Sauvignon", 1350, "./assets/elestecocabernetsauvignon.jpg", 19, 6),
    new Vino("El Esteco", "blanco", "Blanc de Blancs", 1500, "./assets/elesteco-blanc.png", 20, 8)
]


