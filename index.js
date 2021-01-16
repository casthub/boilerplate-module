var css = ".module {\n  display: flex;\n  flex-direction: column; }\n";

class index extends window.casthub.module {
    constructor() {
        super();
        // Set the Module HTML using the Template file.
        this.$container.appendChild(this.template());
        // Set the CSS from the external file.
        this.css = css;
    }
    async mounted() {
        await super.mounted();
    }
}

module.exports = index;
