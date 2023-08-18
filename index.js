function introduction(name){
    return `Hi, my name is ${name}.`;
    }

    function introductionWithLanguage(name, language) {
        console.log(`The two values are ${name} and ${language}.`);
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
      }

      function introductionWithLanguageOptional(name, language = "JavaScript") {
        console.log(`The two values are ${name} and ${language}.`);
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      }