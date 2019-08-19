class Wine {
    /**
     * Constructor
     * @param {String} name the name of the wine.
     * @param {String} vineyard the name of the vineyard who produced the wine.
     * @param {String} variety the grape variety.
     * @param {Number} year the year it was produced.
     * @param {Number} alcohol the alcohol percentage in the bottle.
     * @param {String} country the country of the vineyard.
     */
    constructor(name, vineyard, variety, year, alcohol, country) {
        this.name = name;
        this.vineyard = vineyard;
        this.variety = variety;
        this.year = year;
        this.alcohol = alcohol;
        this.country = country;        
    }

    // Getters

    /**
     * Gets the wine's name.
     */
    getName() {
        return this.name;
    }

    /**
     * Gets the wine's vineyard.
     */
    getVineyard() {
        return this.vineyard;
    }

    /**
     * Gets the wine's variety.
     */
    getVariety() {
        return this.variety;
    }

    /**
     * Gets the wine's year of production.
     */
    getYear() {
        return this.year;
    }

    /**
     * Gets the wine's alcohol percentage.
     */
    getAlcohol() {
        return this.alcohol;
    }

    /**
     * Gets the vineyard's country.
     */
    getCountry() {
        return this.country;
    }

    // Setters

    /**
     * Sets the wine's name.
     * @param {String} name the new name. 
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Sets the wine's vineyard.
     * @param {String} vineyard the new vineyard.
     */
    setVineyard(vineyard) {
        this.vineyard = vineyard;
    }

    /**
     * Sets the wine's variety.
     * @param {String} variety the new variety.
     */
    setVariety(variety) {
        this.variety = variety;
    }

    /**
     * Sets the wine's year of production.
     * @param {Number} year the new year.
     */
    setYear(year) {
        this.year = year;
    }

    /**
     * Sets the wine's alcohol percentage.
     * @param {Number} alcohol the new percentage.
     */
    setAlcohol(alcohol) {
        this.alcohol = alcohol;
    }

    /**
     * Sets the vineyard's country.
     * @param {*} country the new country.
     */
    setCountry(country) {
        this.country = country;
    }
}