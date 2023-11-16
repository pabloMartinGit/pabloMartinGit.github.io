(function(window, undefined) {
  var dictionary = {
    "b4571a30-a504-44b5-9d2f-c20c8a504e86": "Lección 1-3",
    "58b44310-44fd-4548-a59e-4f6afb614d61": "Lección 1-3En",
    "b774e602-0949-4049-8750-610650ce44f5": "Lección 1-4",
    "20dd865d-9fc1-415e-8648-7c4400a75d84": "Lecciones",
    "2b4d8da0-50e2-4551-9790-7a05236ee670": "Lección 1-2En",
    "51f83883-39f8-40ea-a653-8d4db39fb56c": "Lección 2-1",
    "ef2533d2-0f1e-4d0b-b7b3-a7fa22341f0b": "Lección 1-1",
    "7bbec92c-f779-4bc2-9d85-ba237c06d714": "Lección 3-1",
    "530a28b9-f898-440e-a0c0-8bae0899bfff": "Lección 2-1INGLES",
    "71abfe69-5213-4c74-922e-7bdc942cd5d6": "Preguntas frecuentes Ingles",
    "c062c09c-c8b4-4aae-948a-6dbecd518a6c": "Log In",
    "cbf0e7f6-69ed-43c5-b97a-5fca7a799546": "Lección 2-2",
    "21af9ad3-4662-44cc-929d-f4732a3e990c": "Lección 2-2Ingles",
    "3d696a26-97ff-43ae-8d5e-7db1f939d035": "Lección 3-1En",
    "111104da-1411-4a8e-8b66-586c12ea375f": "Lección 1-2",
    "6af61c69-6624-4656-be87-0b394d8a8bc3": "Lección 1-1Ingles",
    "e045d30c-2c10-49df-a627-0d18118a798d": "LeccioneIngles",
    "a81ea37b-fd06-48a8-954c-5d1a02fa6cd5": "Screen 1 Ingles",
    "45d479f1-5212-48c3-9528-dac47f740034": "Lección 1-4En",
    "98239622-f916-4f19-8757-22edeada94fd": "Preguntas frecuentes",
    "af4e7b50-4d85-4cc2-81b4-ac2572755dc0": "Log In Ingles",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);