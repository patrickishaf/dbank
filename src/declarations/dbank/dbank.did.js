export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compound' : IDL.Func([], [], ['oneway']),
    'getbalance' : IDL.Func([], [IDL.Float64], ['query']),
    'printTime' : IDL.Func([], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withdraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
