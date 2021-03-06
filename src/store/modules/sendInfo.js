export const SET_DATA = 'sendInfo/SET_DATA';

export const setData = (name, value) => ({type: SET_DATA, name, value});

const initialState = {
  nickname : '',
  companyName: '',
  companyCode : 0,
  startDate: '0000-00-00',
  endDate: '0000-00-00',
  agencyNetsales : false,   //기관 순매매량 
  foreignNetsales : false,   //외국인 순매매량 
  foreignSharesheld : false,   //외국인 보유주수 
  usdkrw : false,       //원달러
  jpykrw : false,      //원엔 
  cnykrw : false,       //원위안
  kospi : false,     //코스피 체결가
  kosdaq : false,    //코스닥 체결가
  dji : false,      //다우산업 체결가
  nas : false,      //나스닥
  shs : false,      //상해
  nii : false,   //니케이225
  separation: false, // 이격도
  rsi : false,       // rsi
  cci : false,       // cci
  ex1 : false,
  ex2 : false,
  ex3 : false,
  ex4 : false,
  ex5 : false,
  ex6 : false,
}


export default function create(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        [action.name]: action.value,
      }
    default:
      return state;
  }
}
