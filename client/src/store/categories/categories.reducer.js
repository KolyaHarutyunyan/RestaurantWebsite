const initialState = [
      {
        id:"879ddf879",
        title:"vddsvs",
        items:["1","4","6"],
        parents:["879879"],
        type:"foods",
      }, {
        id:"879ddf8hdfgdfg79",
        title:"vddsvhdfthdfgjs",
        items:["1","4","6"],
        parents:["8798sd79"],
        type:"foods",
      }, {
        id:"879ddf8sdf79",
        title:"vddsdfdsfsvs",
        items:["1","4","6"],
        parents:["8798sd79"],
        type:"foods",
      }, {
        id:"879ddf87sdfas9",
        title:"vsdfddsvs",
        items:["1","4","6"],
        parents:["8798sd79","879879"],
        type:"foods",
      },
      {
        id:"879ddf8sd79",
        title:"vddsdssvs",
        items:["2","5","13","7","14","11","9"],
        parents:["879879"],
        type:"foods",
      },
      {
        id:"879ddf8as79",
        title:"vddsSDvs",
        type:"drinks",
        items:["13","7","14","11","9"],
        parents:["879879"],
      },
    ]
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
