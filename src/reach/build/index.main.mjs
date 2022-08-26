// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc2],
      7: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc2],
      8: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc2, ctc1, ctc2],
      10: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function NumGenAi(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for NumGenAi expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for NumGenAi expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Address;
  
  
  const v287 = stdlib.protect(ctc0, interact.deadline, 'for NumGenAi\'s interact field deadline');
  const v288 = stdlib.protect(ctc1, interact.getunique_numset, 'for NumGenAi\'s interact field getunique_numset');
  
  const v297 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:53:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:51:18:application call to [unknown function] (defined at: ./index.rsh:51:22:function exp)'],
    msg: 'random',
    who: 'NumGenAi'
    });
  const v298 = stdlib.digest(ctc2, [v297, v288]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v298, v287],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:57:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v301, v302], secs: v304, time: v303, didSend: v39, from: v300 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v301, v302], secs: v304, time: v303, didSend: v39, from: v300 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v308], secs: v310, time: v309, didSend: v49, from: v307 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v59, from: v315 } = txn3;
  ;
  let v321 = stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0');
  let v322 = v317;
  
  while (await (async () => {
    const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
    
    return v333;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v341], secs: v343, time: v342, didSend: v80, from: v340 } = txn4;
    ;
    const v344 = stdlib.addressEq(v307, v340);
    stdlib.assert(v344, {
      at: './index.rsh:85:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'NumGenAi'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v349], secs: v351, time: v350, didSend: v90, from: v348 } = txn5;
    ;
    const v352 = stdlib.addressEq(v315, v348);
    stdlib.assert(v352, {
      at: './index.rsh:93:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'NumGenAi'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 6,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v356, v357], secs: v359, time: v358, didSend: v100, from: v355 } = txn6;
    ;
    const v360 = stdlib.addressEq(v307, v355);
    stdlib.assert(v360, {
      at: './index.rsh:100:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'NumGenAi'
      });
    const v361 = stdlib.digest(ctc5, [v356, v357]);
    const v362 = stdlib.digestEq(v341, v361);
    stdlib.assert(v362, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'NumGenAi'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v300, v301, v307, v308, v315, v321, v349, v357, v297, v288],
      evt_cnt: 2,
      funcNum: 7,
      lct: v358,
      onlyIf: true,
      out_tys: [ctc0, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:107:18:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v366, v367], secs: v369, time: v368, didSend: v113, from: v365 } = txn7;
        
        ;
        const v373 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '0')];
        const v374 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '1')];
        const v375 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '2')];
        const v376 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '3')];
        const v377 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '4')];
        const v378 = stdlib.eq(v373, v357);
        const v379 = stdlib.eq(v373, v349);
        const v380 = v379 ? false : true;
        const v381 = v378 ? v380 : false;
        const v382 = stdlib.eq(v374, v357);
        const v383 = stdlib.eq(v374, v349);
        const v384 = v383 ? false : true;
        const v385 = v382 ? v384 : false;
        const v386 = v381 ? true : v385;
        const v387 = stdlib.eq(v375, v357);
        const v388 = stdlib.eq(v375, v349);
        const v389 = v388 ? false : true;
        const v390 = v387 ? v389 : false;
        const v391 = v386 ? true : v390;
        const v392 = stdlib.eq(v376, v357);
        const v393 = stdlib.eq(v376, v349);
        const v394 = v393 ? false : true;
        const v395 = v392 ? v394 : false;
        const v396 = v391 ? true : v395;
        const v397 = stdlib.eq(v377, v357);
        const v398 = stdlib.eq(v377, v349);
        const v399 = v398 ? false : true;
        const v400 = v397 ? v399 : false;
        const v401 = v396 ? true : v400;
        if (v401) {
          const cv321 = stdlib.checkedBigNumberify('./index.rsh:112:17:decimal', stdlib.UInt_max, '10');
          const cv322 = v368;
          
          await (async () => {
            const v321 = cv321;
            const v322 = cv322;
            
            if (await (async () => {
              const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
              
              return v333;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
              if (v447) {
                
                }
              else {
                const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
                if (v457) {
                  
                  }
                else {
                  
                  }
                }
              if (v447) {
                const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
                sim_r.txns.push({
                  kind: 'from',
                  to: v307,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
                if (v484) {
                  const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v315,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v307,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v315,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}})();}
        else {
          const v404 = v378 ? false : true;
          const v405 = v379 ? v404 : false;
          const v408 = v382 ? false : true;
          const v409 = v383 ? v408 : false;
          const v410 = v405 ? true : v409;
          const v413 = v387 ? false : true;
          const v414 = v388 ? v413 : false;
          const v415 = v410 ? true : v414;
          const v418 = v392 ? false : true;
          const v419 = v393 ? v418 : false;
          const v420 = v415 ? true : v419;
          const v423 = v397 ? false : true;
          const v424 = v398 ? v423 : false;
          const v425 = v420 ? true : v424;
          if (v425) {
            const cv321 = stdlib.checkedBigNumberify('./index.rsh:116:21:decimal', stdlib.UInt_max, '11');
            const cv322 = v368;
            
            await (async () => {
              const v321 = cv321;
              const v322 = cv322;
              
              if (await (async () => {
                const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
                
                return v333;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
                if (v447) {
                  
                  }
                else {
                  const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
                  if (v457) {
                    
                    }
                  else {
                    
                    }
                  }
                if (v447) {
                  const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v307,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
                  if (v484) {
                    const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v315,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v307,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v315,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}})();}
          else {
            const v428 = v379 ? v378 : false;
            const v431 = v383 ? v382 : false;
            const v432 = v428 ? true : v431;
            const v435 = v388 ? v387 : false;
            const v436 = v432 ? true : v435;
            const v439 = v393 ? v392 : false;
            const v440 = v436 ? true : v439;
            const v443 = v398 ? v397 : false;
            const v444 = v440 ? true : v443;
            if (v444) {
              const cv321 = stdlib.checkedBigNumberify('./index.rsh:120:25:decimal', stdlib.UInt_max, '12');
              const cv322 = v368;
              
              await (async () => {
                const v321 = cv321;
                const v322 = cv322;
                
                if (await (async () => {
                  const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
                  
                  return v333;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
                  if (v447) {
                    
                    }
                  else {
                    const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
                    if (v457) {
                      
                      }
                    else {
                      
                      }
                    }
                  if (v447) {
                    const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v307,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
                    if (v484) {
                      const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v307,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();}
            else {
              const v445 = stdlib.add(v321, stdlib.checkedBigNumberify('./index.rsh:124:21:decimal', stdlib.UInt_max, '1'));
              const cv321 = v445;
              const cv322 = v368;
              
              await (async () => {
                const v321 = cv321;
                const v322 = cv322;
                
                if (await (async () => {
                  const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
                  
                  return v333;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
                  if (v447) {
                    
                    }
                  else {
                    const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
                    if (v457) {
                      
                      }
                    else {
                      
                      }
                    }
                  if (v447) {
                    const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v307,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
                    if (v484) {
                      const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v307,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();}}}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc3, ctc6, ctc0, ctc6, ctc0, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v366, v367], secs: v369, time: v368, didSend: v113, from: v365 } = txn7;
    ;
    const v370 = stdlib.addressEq(v300, v365);
    stdlib.assert(v370, {
      at: './index.rsh:107:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'NumGenAi'
      });
    const v371 = stdlib.digest(ctc2, [v366, v367]);
    const v372 = stdlib.digestEq(v301, v371);
    stdlib.assert(v372, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:108:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'NumGenAi'
      });
    const v373 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '0')];
    const v374 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '1')];
    const v375 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '2')];
    const v376 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '3')];
    const v377 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '4')];
    const v378 = stdlib.eq(v373, v357);
    const v379 = stdlib.eq(v373, v349);
    const v380 = v379 ? false : true;
    const v381 = v378 ? v380 : false;
    const v382 = stdlib.eq(v374, v357);
    const v383 = stdlib.eq(v374, v349);
    const v384 = v383 ? false : true;
    const v385 = v382 ? v384 : false;
    const v386 = v381 ? true : v385;
    const v387 = stdlib.eq(v375, v357);
    const v388 = stdlib.eq(v375, v349);
    const v389 = v388 ? false : true;
    const v390 = v387 ? v389 : false;
    const v391 = v386 ? true : v390;
    const v392 = stdlib.eq(v376, v357);
    const v393 = stdlib.eq(v376, v349);
    const v394 = v393 ? false : true;
    const v395 = v392 ? v394 : false;
    const v396 = v391 ? true : v395;
    const v397 = stdlib.eq(v377, v357);
    const v398 = stdlib.eq(v377, v349);
    const v399 = v398 ? false : true;
    const v400 = v397 ? v399 : false;
    const v401 = v396 ? true : v400;
    if (v401) {
      const cv321 = stdlib.checkedBigNumberify('./index.rsh:112:17:decimal', stdlib.UInt_max, '10');
      const cv322 = v368;
      
      v321 = cv321;
      v322 = cv322;
      
      continue;}
    else {
      const v404 = v378 ? false : true;
      const v405 = v379 ? v404 : false;
      const v408 = v382 ? false : true;
      const v409 = v383 ? v408 : false;
      const v410 = v405 ? true : v409;
      const v413 = v387 ? false : true;
      const v414 = v388 ? v413 : false;
      const v415 = v410 ? true : v414;
      const v418 = v392 ? false : true;
      const v419 = v393 ? v418 : false;
      const v420 = v415 ? true : v419;
      const v423 = v397 ? false : true;
      const v424 = v398 ? v423 : false;
      const v425 = v420 ? true : v424;
      if (v425) {
        const cv321 = stdlib.checkedBigNumberify('./index.rsh:116:21:decimal', stdlib.UInt_max, '11');
        const cv322 = v368;
        
        v321 = cv321;
        v322 = cv322;
        
        continue;}
      else {
        const v428 = v379 ? v378 : false;
        const v431 = v383 ? v382 : false;
        const v432 = v428 ? true : v431;
        const v435 = v388 ? v387 : false;
        const v436 = v432 ? true : v435;
        const v439 = v393 ? v392 : false;
        const v440 = v436 ? true : v439;
        const v443 = v398 ? v397 : false;
        const v444 = v440 ? true : v443;
        if (v444) {
          const cv321 = stdlib.checkedBigNumberify('./index.rsh:120:25:decimal', stdlib.UInt_max, '12');
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}
        else {
          const v445 = stdlib.add(v321, stdlib.checkedBigNumberify('./index.rsh:124:21:decimal', stdlib.UInt_max, '1'));
          const cv321 = v445;
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}}}
    
    
    
    
    
    
    
    }
  const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
  if (v447) {
    const v450 = 'one';
    stdlib.protect(ctc4, await interact.seeWinner(v450), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:17:application call to [unknown function] (defined at: ./index.rsh:36:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
      msg: 'seeWinner',
      who: 'NumGenAi'
      });
    
    }
  else {
    const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
    if (v457) {
      const v460 = 'two';
      stdlib.protect(ctc4, await interact.seeWinner(v460), {
        at: './index.rsh:42:35:application',
        fs: ['at ./index.rsh:41:17:application call to [unknown function] (defined at: ./index.rsh:41:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'NumGenAi'
        });
      
      }
    else {
      const v469 = 'tie';
      stdlib.protect(ctc4, await interact.seeWinner(v469), {
        at: './index.rsh:46:35:application',
        fs: ['at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'NumGenAi'
        });
      
      }
    }
  if (v447) {
    const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
    ;
    return;
    }
  else {
    const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
    if (v484) {
      const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
      ;
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  
  
  
  };
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Address;
  
  
  const v294 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v301, v302], secs: v304, time: v303, didSend: v39, from: v300 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v300, v301, v294],
    evt_cnt: 1,
    funcNum: 1,
    lct: v303,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v294, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v308], secs: v310, time: v309, didSend: v49, from: v307 } = txn2;
      
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v308], secs: v310, time: v309, didSend: v49, from: v307 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v59, from: v315 } = txn3;
  ;
  let v321 = stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0');
  let v322 = v317;
  
  while (await (async () => {
    const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
    
    return v333;})()) {
    const v336 = stdlib.protect(ctc0, await interact.getnum(), {
      at: './index.rsh:80:44:application',
      fs: ['at ./index.rsh:79:21:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
      msg: 'getnum',
      who: 'Player1'
      });
    const v337 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:81:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:79:21:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v338 = stdlib.digest(ctc3, [v337, v336]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v300, v301, v307, v308, v315, v321, v338],
      evt_cnt: 1,
      funcNum: 4,
      lct: v322,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:85:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v341], secs: v343, time: v342, didSend: v80, from: v340 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc6, ctc0, ctc6, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v341], secs: v343, time: v342, didSend: v80, from: v340 } = txn4;
    ;
    const v344 = stdlib.addressEq(v307, v340);
    stdlib.assert(v344, {
      at: './index.rsh:85:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v349], secs: v351, time: v350, didSend: v90, from: v348 } = txn5;
    ;
    const v352 = stdlib.addressEq(v315, v348);
    stdlib.assert(v352, {
      at: './index.rsh:93:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v300, v301, v307, v308, v315, v321, v341, v349, v337, v336],
      evt_cnt: 2,
      funcNum: 6,
      lct: v350,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:100:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v356, v357], secs: v359, time: v358, didSend: v100, from: v355 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc1, ctc6, ctc0, ctc6, ctc0, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v356, v357], secs: v359, time: v358, didSend: v100, from: v355 } = txn6;
    ;
    const v360 = stdlib.addressEq(v307, v355);
    stdlib.assert(v360, {
      at: './index.rsh:100:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v361 = stdlib.digest(ctc3, [v356, v357]);
    const v362 = stdlib.digestEq(v341, v361);
    stdlib.assert(v362, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player1'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 7,
      out_tys: [ctc0, ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v366, v367], secs: v369, time: v368, didSend: v113, from: v365 } = txn7;
    ;
    const v370 = stdlib.addressEq(v300, v365);
    stdlib.assert(v370, {
      at: './index.rsh:107:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v371 = stdlib.digest(ctc5, [v366, v367]);
    const v372 = stdlib.digestEq(v301, v371);
    stdlib.assert(v372, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:108:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player1'
      });
    const v373 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '0')];
    const v374 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '1')];
    const v375 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '2')];
    const v376 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '3')];
    const v377 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '4')];
    const v378 = stdlib.eq(v373, v357);
    const v379 = stdlib.eq(v373, v349);
    const v380 = v379 ? false : true;
    const v381 = v378 ? v380 : false;
    const v382 = stdlib.eq(v374, v357);
    const v383 = stdlib.eq(v374, v349);
    const v384 = v383 ? false : true;
    const v385 = v382 ? v384 : false;
    const v386 = v381 ? true : v385;
    const v387 = stdlib.eq(v375, v357);
    const v388 = stdlib.eq(v375, v349);
    const v389 = v388 ? false : true;
    const v390 = v387 ? v389 : false;
    const v391 = v386 ? true : v390;
    const v392 = stdlib.eq(v376, v357);
    const v393 = stdlib.eq(v376, v349);
    const v394 = v393 ? false : true;
    const v395 = v392 ? v394 : false;
    const v396 = v391 ? true : v395;
    const v397 = stdlib.eq(v377, v357);
    const v398 = stdlib.eq(v377, v349);
    const v399 = v398 ? false : true;
    const v400 = v397 ? v399 : false;
    const v401 = v396 ? true : v400;
    if (v401) {
      const cv321 = stdlib.checkedBigNumberify('./index.rsh:112:17:decimal', stdlib.UInt_max, '10');
      const cv322 = v368;
      
      v321 = cv321;
      v322 = cv322;
      
      continue;}
    else {
      const v404 = v378 ? false : true;
      const v405 = v379 ? v404 : false;
      const v408 = v382 ? false : true;
      const v409 = v383 ? v408 : false;
      const v410 = v405 ? true : v409;
      const v413 = v387 ? false : true;
      const v414 = v388 ? v413 : false;
      const v415 = v410 ? true : v414;
      const v418 = v392 ? false : true;
      const v419 = v393 ? v418 : false;
      const v420 = v415 ? true : v419;
      const v423 = v397 ? false : true;
      const v424 = v398 ? v423 : false;
      const v425 = v420 ? true : v424;
      if (v425) {
        const cv321 = stdlib.checkedBigNumberify('./index.rsh:116:21:decimal', stdlib.UInt_max, '11');
        const cv322 = v368;
        
        v321 = cv321;
        v322 = cv322;
        
        continue;}
      else {
        const v428 = v379 ? v378 : false;
        const v431 = v383 ? v382 : false;
        const v432 = v428 ? true : v431;
        const v435 = v388 ? v387 : false;
        const v436 = v432 ? true : v435;
        const v439 = v393 ? v392 : false;
        const v440 = v436 ? true : v439;
        const v443 = v398 ? v397 : false;
        const v444 = v440 ? true : v443;
        if (v444) {
          const cv321 = stdlib.checkedBigNumberify('./index.rsh:120:25:decimal', stdlib.UInt_max, '12');
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}
        else {
          const v445 = stdlib.add(v321, stdlib.checkedBigNumberify('./index.rsh:124:21:decimal', stdlib.UInt_max, '1'));
          const cv321 = v445;
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}}}
    
    
    
    
    
    
    
    }
  const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
  if (v447) {
    const v453 = 'one';
    stdlib.protect(ctc2, await interact.seeWinner(v453), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:17:application call to [unknown function] (defined at: ./index.rsh:36:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
      msg: 'seeWinner',
      who: 'Player1'
      });
    
    }
  else {
    const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
    if (v457) {
      const v463 = 'two';
      stdlib.protect(ctc2, await interact.seeWinner(v463), {
        at: './index.rsh:42:35:application',
        fs: ['at ./index.rsh:41:17:application call to [unknown function] (defined at: ./index.rsh:41:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'Player1'
        });
      
      }
    else {
      const v472 = 'tie';
      stdlib.protect(ctc2, await interact.seeWinner(v472), {
        at: './index.rsh:46:35:application',
        fs: ['at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'Player1'
        });
      
      }
    }
  if (v447) {
    const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
    ;
    return;
    }
  else {
    const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
    if (v484) {
      const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
      ;
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc6 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v301, v302], secs: v304, time: v303, didSend: v39, from: v300 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v308], secs: v310, time: v309, didSend: v49, from: v307 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.acceptwager(v308), {
    at: './index.rsh:69:60:application',
    fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
    msg: 'acceptwager',
    who: 'Player2'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v300, v301, v307, v308, null],
    evt_cnt: 1,
    funcNum: 2,
    lct: v309,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v308, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v316], secs: v318, time: v317, didSend: v59, from: v315 } = txn3;
      
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v321 = stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0');
      const v322 = v317;
      
      if (await (async () => {
        const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
        
        return v333;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
        if (v447) {
          
          }
        else {
          const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
          if (v457) {
            
            }
          else {
            
            }
          }
        if (v447) {
          const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
          sim_r.txns.push({
            kind: 'from',
            to: v307,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
          if (v484) {
            const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
            sim_r.txns.push({
              kind: 'from',
              to: v315,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v307,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v315,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc6, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v59, from: v315 } = txn3;
  ;
  let v321 = stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0');
  let v322 = v317;
  
  while (await (async () => {
    const v333 = stdlib.lt(v321, stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '3'));
    
    return v333;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v341], secs: v343, time: v342, didSend: v80, from: v340 } = txn4;
    ;
    const v344 = stdlib.addressEq(v307, v340);
    stdlib.assert(v344, {
      at: './index.rsh:85:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v347 = stdlib.protect(ctc1, await interact.getnum(), {
      at: './index.rsh:91:58:application',
      fs: ['at ./index.rsh:90:21:application call to [unknown function] (defined at: ./index.rsh:90:25:function exp)'],
      msg: 'getnum',
      who: 'Player2'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v300, v301, v307, v308, v315, v321, v341, v347],
      evt_cnt: 1,
      funcNum: 5,
      lct: v342,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v349], secs: v351, time: v350, didSend: v90, from: v348 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc6, ctc1, ctc6, ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v349], secs: v351, time: v350, didSend: v90, from: v348 } = txn5;
    ;
    const v352 = stdlib.addressEq(v315, v348);
    stdlib.assert(v352, {
      at: './index.rsh:93:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 6,
      out_tys: [ctc1, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v356, v357], secs: v359, time: v358, didSend: v100, from: v355 } = txn6;
    ;
    const v360 = stdlib.addressEq(v307, v355);
    stdlib.assert(v360, {
      at: './index.rsh:100:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v361 = stdlib.digest(ctc3, [v356, v357]);
    const v362 = stdlib.digestEq(v341, v361);
    stdlib.assert(v362, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player2'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 7,
      out_tys: [ctc1, ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v366, v367], secs: v369, time: v368, didSend: v113, from: v365 } = txn7;
    ;
    const v370 = stdlib.addressEq(v300, v365);
    stdlib.assert(v370, {
      at: './index.rsh:107:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v371 = stdlib.digest(ctc5, [v366, v367]);
    const v372 = stdlib.digestEq(v301, v371);
    stdlib.assert(v372, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:108:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player2'
      });
    const v373 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '0')];
    const v374 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '1')];
    const v375 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '2')];
    const v376 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '3')];
    const v377 = v367[stdlib.checkedBigNumberify('./index.rsh:109:15:array', stdlib.UInt_max, '4')];
    const v378 = stdlib.eq(v373, v357);
    const v379 = stdlib.eq(v373, v349);
    const v380 = v379 ? false : true;
    const v381 = v378 ? v380 : false;
    const v382 = stdlib.eq(v374, v357);
    const v383 = stdlib.eq(v374, v349);
    const v384 = v383 ? false : true;
    const v385 = v382 ? v384 : false;
    const v386 = v381 ? true : v385;
    const v387 = stdlib.eq(v375, v357);
    const v388 = stdlib.eq(v375, v349);
    const v389 = v388 ? false : true;
    const v390 = v387 ? v389 : false;
    const v391 = v386 ? true : v390;
    const v392 = stdlib.eq(v376, v357);
    const v393 = stdlib.eq(v376, v349);
    const v394 = v393 ? false : true;
    const v395 = v392 ? v394 : false;
    const v396 = v391 ? true : v395;
    const v397 = stdlib.eq(v377, v357);
    const v398 = stdlib.eq(v377, v349);
    const v399 = v398 ? false : true;
    const v400 = v397 ? v399 : false;
    const v401 = v396 ? true : v400;
    if (v401) {
      const cv321 = stdlib.checkedBigNumberify('./index.rsh:112:17:decimal', stdlib.UInt_max, '10');
      const cv322 = v368;
      
      v321 = cv321;
      v322 = cv322;
      
      continue;}
    else {
      const v404 = v378 ? false : true;
      const v405 = v379 ? v404 : false;
      const v408 = v382 ? false : true;
      const v409 = v383 ? v408 : false;
      const v410 = v405 ? true : v409;
      const v413 = v387 ? false : true;
      const v414 = v388 ? v413 : false;
      const v415 = v410 ? true : v414;
      const v418 = v392 ? false : true;
      const v419 = v393 ? v418 : false;
      const v420 = v415 ? true : v419;
      const v423 = v397 ? false : true;
      const v424 = v398 ? v423 : false;
      const v425 = v420 ? true : v424;
      if (v425) {
        const cv321 = stdlib.checkedBigNumberify('./index.rsh:116:21:decimal', stdlib.UInt_max, '11');
        const cv322 = v368;
        
        v321 = cv321;
        v322 = cv322;
        
        continue;}
      else {
        const v428 = v379 ? v378 : false;
        const v431 = v383 ? v382 : false;
        const v432 = v428 ? true : v431;
        const v435 = v388 ? v387 : false;
        const v436 = v432 ? true : v435;
        const v439 = v393 ? v392 : false;
        const v440 = v436 ? true : v439;
        const v443 = v398 ? v397 : false;
        const v444 = v440 ? true : v443;
        if (v444) {
          const cv321 = stdlib.checkedBigNumberify('./index.rsh:120:25:decimal', stdlib.UInt_max, '12');
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}
        else {
          const v445 = stdlib.add(v321, stdlib.checkedBigNumberify('./index.rsh:124:21:decimal', stdlib.UInt_max, '1'));
          const cv321 = v445;
          const cv322 = v368;
          
          v321 = cv321;
          v322 = cv322;
          
          continue;}}}
    
    
    
    
    
    
    
    }
  const v447 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '10'));
  if (v447) {
    const v456 = 'one';
    stdlib.protect(ctc2, await interact.seeWinner(v456), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:17:application call to [unknown function] (defined at: ./index.rsh:36:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
      msg: 'seeWinner',
      who: 'Player2'
      });
    
    }
  else {
    const v457 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:40:23:decimal', stdlib.UInt_max, '11'));
    if (v457) {
      const v466 = 'two';
      stdlib.protect(ctc2, await interact.seeWinner(v466), {
        at: './index.rsh:42:35:application',
        fs: ['at ./index.rsh:41:17:application call to [unknown function] (defined at: ./index.rsh:41:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'Player2'
        });
      
      }
    else {
      const v475 = 'tie';
      stdlib.protect(ctc2, await interact.seeWinner(v475), {
        at: './index.rsh:46:35:application',
        fs: ['at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)', 'at ./index.rsh:130:17:application call to "informWinner" (defined at: ./index.rsh:34:30:function exp)'],
        msg: 'seeWinner',
        who: 'Player2'
        });
      
      }
    }
  if (v447) {
    const v477 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:133:18:decimal', stdlib.UInt_max, '2'), v308);
    ;
    return;
    }
  else {
    const v484 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, '11'));
    if (v484) {
      const v485 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:136:22:decimal', stdlib.UInt_max, '2'), v308);
      ;
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAECCGAHCogBIAsJBQMmAwEAAQEAIjUAMRhBBWYqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQANSSYEGDEACOkkhBQxAAYwhBRJEIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/1cgIDX+V0AgNf0hBFs1/FdoIDX7gZABWzX6gZgBWzX5STUFSSJbNfhXCCg194AEzUY5gDT4FlA091CwNP8xABJENP40+BY091ABEkQ09yJbNfY09yVbNfU094EQWzX0NPeBGFs18zT3IQhbNfI09jT5EjXxNPY0+hI18DT1NPkSNe809TT6EjXuNPQ0+RI17TT0NPoSNew08zT5EjXrNPM0+hI16jTyNPkSNek08jT6EjXoNPE08BQQNO807hQQETTtNOwUEBE06zTqFBARNOk06BQQEUEAETT/NP40/TT8NPshBjIGQgMrNPA08RQQNO407xQQETTsNO0UEBE06jTrFBARNOg06RQQEUEAETT/NP40/TT8NPshCTIGQgL1NPA08RA07jTvEBE07DTtEBE06jTrEBE06DTpEBFBABE0/zT+NP00/DT7gQwyBkICxDT/NP40/TT8NPs0AyEHWyMIMgZCAq5IIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/1cgIDX+V0AgNf0hBFs1/FdoIDX7IQdbNfqBsAFbNflJNQVJIls1+CVbNfeABEohy/w0+BZQNPcWULA0/TEAEkQ0A1eQIDT4FjT3FlABEkQ0/zT+UDT9UDT8FlA0+1A0+hZQNPkWUDT3FlAoSwFXAH9nKUsBV38hZ0ghBjUBMgY1AkICw0khCwxAAItIJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/VyAgNf5XQCA1/SEEWzX8V2ggNfshB1s1+leQIDX5STUFFzX4gASBqprPNPgWULA0+zEAEkQ0/zT+UDT9UDT8FlA0+1A0+hZQNPlQNPgWUChLAVcAf2cpSwFXfzlnSCEKNQEyBjUCQgIxSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/1cgIDX+V0AgNf0hBFs1/FdoIDX7IQdbNfpJNQU1+YAEOLAjLTT5ULA0/TEAEkQ0/zT+UDT9UDT8FlA0+1A0+hZQNPlQKEsBVwB/ZylLAVd/MWdIJTUBMgY1AkIBskkjDEAApUkkDEAASiQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/STUFNf6ABBxPU280/lCwNP+IAcc0A1cAIDQDVyAgNANXQCA0/zEAIjIGQgCgSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFFzX9gATVFRkUNP0WULA0/YgBdzT/NP5QMQBQNP0WUChLAVcAaGdIJDUBMgY1AkIBB0iBoI0GiAFRIjQBEkQ0BEkiEkw0AhIRREk1BUlXACA1/yEIWzX+gATb8EUPNP9QNP4WULAxADT/UChLAVcAQGdIIzUBMgY1AkIAvDX/Nf41/TX8Nfs1+jX5NP4hDAxBAC00+TT6UDT7UDT8FlA0/VA0/hZQKEsBVwB/ZylLAVd/EWdIIQU1ATIGNQJCAHk0/iEGEkEAFbEisgEkNPwLsggjshA0+7IHs0IAQDT+IQkSQQAVsSKyASQ0/AuyCCOyEDT9sgezQgAjsSKyATT8sggjshA0+7IHs7EisgE0/LIII7IQNP2yB7NCAAAxGSELEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQwxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v316",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem4",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T21",
                "name": "v367",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v316",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem4",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T21",
                "name": "v367",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e1c38038062001e1c8339810160408190526200002691620001f8565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b34156007620000f1565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e892600292909101906200011b565b50505062000295565b81620001175760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001299062000258565b90600052602060002090601f0160209004810192826200014d576000855562000198565b82601f106200016857805160ff191683800117855562000198565b8280016001018555821562000198579182015b82811115620001985782518255916020019190600101906200017b565b50620001a6929150620001aa565b5090565b5b80821115620001a65760008155600101620001ab565b604080519081016001600160401b0381118282101715620001f257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200020c57600080fd5b62000216620001c1565b835181526040601f19830112156200022d57600080fd5b62000237620001c1565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200026d57607f821691505b602082108114156200028f57634e487b7160e01b600052602260045260246000fd5b50919050565b611b7780620002a56000396000f3fe6080604052600436106100845760003560e01c8063552d7b8e11610056578063552d7b8e146100ea57806383230757146100fd578063873779a114610112578063a209ad4e14610125578063ab53f2c61461013857005b80631e93b0f11461008d57806321642639146100b15780633d44913a146100c45780633e59bac4146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611583565b61015b565b61008b6100d236600461159b565b6103ed565b61008b6100e53660046115bf565b610a37565b61008b6100f83660046115bf565b610bb0565b34801561010957600080fd5b5060015461009e565b61008b6101203660046115bf565b610db5565b61008b6101333660046115bf565b610f47565b34801561014457600080fd5b5061014d61117d565b6040516100a89291906115e2565b61016b600960005414601961121a565b6101858135158061017e57506001548235145b601a61121a565b6000808055600280546101979061163f565b80601f01602080910402602001604051908101604052809291908181526020018280546101c39061163f565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190611743565b604080513381528435602080830191909152850135818301529084013560608201529091507fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f9060800160405180910390a16102863415601661121a565b60408101516102a1906001600160a01b03163314601761121a565b604080516102ed916102c791602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260c0015114601861121a565b61035060405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151831681850152606080860151908501526080808601519093169284019290925260a0808501519084015260e08085015160c08501528583013590840152600a6000554360015590516103c391839101611760565b604051602081830303815290604052600290805190602001906103e792919061145b565b50505050565b6103fd600a60005414601e61121a565b6104178135158061041057506001548235145b601f61121a565b6000808055600280546104299061163f565b80601f01602080910402602001604051908101604052809291908181526020018280546104559061163f565b80156104a25780601f10610477576101008083540402835291602001916104a2565b820191906000526020600020905b81548152906001019060200180831161048557829003601f168201915b50505050508060200190518101906104ba9190611743565b6040805161014081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529051919250907f039ab6ea8b66df82232d0d7d01c0a318f034f0313cdab26ed88f68dcb68935f99061053d90339086906117cc565b60405180910390a16105513415601b61121a565b8151610569906001600160a01b03163314601c61121a565b604080516105ab9161058591602080880135928801910161182c565b6040516020818303038152906040528051906020012060001c836020015114601d61121a565b60e0808301805160408087013591821480865260c08088018051909414602088015284516060808b0135918214948901949094528451149287019290925283516080808a01359182149088015283511460a0808801919091528451908901359081148388015283511494860194909452915191860135918214610100850152511461012083015261063d576000610650565b806020015161064d576001610650565b60005b61067b57806040015161066457600061067e565b806060015161067457600161067e565b600061067e565b60015b6106a95780608001516106925760006106ac565b8060a001516106a25760016106ac565b60006106ac565b60015b6106d7578060c001516106c05760006106da565b8060e001516106d05760016106da565b60006106da565b60015b610707578061010001516106ef57600061070a565b80610120015161070057600161070a565b600061070a565b60015b15610774576107176114df565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845190910152608080860151845193169201919091528082018051600a905251439101526103e781611243565b8060200151610784576000610794565b8051610791576001610794565b60005b6107bf5780606001516107a85760006107c2565b80604001516107b85760016107c2565b60006107c2565b60015b6107ed578060a001516107d65760006107f0565b80608001516107e65760016107f0565b60006107f0565b60015b61081b578060e0015161080457600061081e565b8060c0015161081457600161081e565b600061081e565b60015b61084b5780610120015161083357600061084e565b80610100015161084457600161084e565b600061084e565b60015b156108b85761085b6114df565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845190910152608080860151845193169201919091528082018051600b905251439101526103e781611243565b80602001516108c85760006108cb565b80515b6108e95780606001516108df5760006108ec565b80604001516108ec565b60015b61090a578060a0015161090057600061090d565b806080015161090d565b60015b61092b578060e0015161092157600061092e565b8060c0015161092e565b60015b61094e57806101200151610943576000610951565b806101000151610951565b60015b156109bb5761095e6114df565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845190910152608080860151845193169201919091528082018051600c905251439101526103e781611243565b6109c36114df565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351909101526080808501518351921691015260a0830151610a1890600190611881565b60208083018051929092529051439101526103e781611243565b505050565b610a47600260005414600c61121a565b610a6181351580610a5a57506001548235145b600d61121a565b600080805560028054610a739061163f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9f9061163f565b8015610aec5780601f10610ac157610100808354040283529160200191610aec565b820191906000526020600020905b815481529060010190602001808311610acf57829003601f168201915b5050505050806020019051810190610b049190611899565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd3383604051610b37929190611919565b60405180910390a1610b5081606001513414600b61121a565b610b586114df565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091526060808401518351909101528151336080909101528082018051600090525143910152610a3281611243565b610bc0600860005414601461121a565b610bda81351580610bd357506001548235145b601561121a565b600080805560028054610bec9061163f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c189061163f565b8015610c655780601f10610c3a57610100808354040283529160200191610c65565b820191906000526020600020905b815481529060010190602001808311610c4857829003601f168201915b5050505050806020019051810190610c7d9190611956565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33383604051610cb09291906119fb565b60405180910390a1610cc43415601261121a565b6080810151610cdf906001600160a01b03163314601361121a565b610d4260405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151831681850152606080860151908501526080808601519093169284019290925260a0808501519084015260c080850151908401528481013560e084015260096000554360015590516103c391839101611760565b610dc5600160005414600961121a565b610ddf81351580610dd857506001548235145b600a61121a565b600080805560028054610df19061163f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d9061163f565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050505050806020019051810190610e829190611a22565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610eb59291906119fb565b60405180910390a1610ece34602084013514600861121a565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186523385528c8701358352600290975543600155895195860196909652925197840197909752519092169481019490945251908301529060a0016103c3565b610f57600760005414601061121a565b610f7181351580610f6a57506001548235145b601161121a565b600080805560028054610f839061163f565b80601f0160208091040260200160405190810160405280929190818152602001828054610faf9061163f565b8015610ffc5780601f10610fd157610100808354040283529160200191610ffc565b820191906000526020600020905b815481529060010190602001808311610fdf57829003601f168201915b50505050508060200190518101906110149190611a87565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033836040516110479291906119fb565b60405180910390a161105b3415600e61121a565b6040810151611076906001600160a01b03163314600f61121a565b6110d16040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b01518916818b0190815260a0808d0151818d019081528e8a013560c0808f0191825260086000554360015589519b8c019c909c529851978a019790975294518a16938801939093529051908601525190951694830194909452925191810191909152905160e0820152610100016103c3565b6000606060005460028080546111929061163f565b80601f01602080910402602001604051908101604052809291908181526020018280546111be9061163f565b801561120b5780601f106111e05761010080835404028352916020019161120b565b820191906000526020600020905b8154815290600101906020018083116111ee57829003601f168201915b50505050509050915091509091565b8161123f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515160031115611322576040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d51516001600160a01b03908116808e528f518b01518a528f518f0151821689528f5188015187528f51860151821685528f8b01515183526007909b55436001558d51998a019a909a5296519b88019b909b5293518716928601929092525190840152519092169481019490945251908301529060e00160405160208183030381529060405260029080519060200190610a3292919061145b565b602081015151600a141561139c578060000151604001516001600160a01b03166108fc826000015160600151600261135a9190611b22565b6040518115909202916000818181858888f19350505050158015611382573d6000803e3d6000fd5b506000808055600181905561139990600290611538565b50565b602081015151600b14156113d4578060000151608001516001600160a01b03166108fc826000015160600151600261135a9190611b22565b805160408082015160609092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611417573d6000803e3d6000fd5b50805160808101516060909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611382573d6000803e3d6000fd5b8280546114679061163f565b90600052602060002090601f01602090048101928261148957600085556114cf565b82601f106114a257805160ff19168380011785556114cf565b828001600101855582156114cf579182015b828111156114cf5782518255916020019190600101906114b4565b506114db92915061156e565b5090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081908152602001611533604051806040016040528060008152602001600081525090565b905290565b5080546115449061163f565b6000825580601f10611554575050565b601f01602090049060005260206000209081019061139991905b5b808211156114db576000815560010161156f565b60006060828403121561159557600080fd5b50919050565b600060e0828403121561159557600080fd5b60006040828403121561159557600080fd5b6000604082840312156115d157600080fd5b6115db83836115ad565b9392505050565b82815260006020604081840152835180604085015260005b81811015611616578581018301518582016060015282016115fa565b81811115611628576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061165357607f821691505b6020821081141561159557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461168b57600080fd5b919050565b60006101008083850312156116a457600080fd5b6040519081019067ffffffffffffffff821181831017156116d557634e487b7160e01b600052604160045260246000fd5b816040528092506116e584611674565b8152602084015160208201526116fd60408501611674565b60408201526060840151606082015261171860808501611674565b608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b6000610100828403121561175657600080fd5b6115db8383611690565b61010081016117c6828460018060a01b0380825116835260208201516020840152806040830151166040840152606082015160608401528060808301511660808401525060a081015160a083015260c081015160c083015260e081015160e08301525050565b92915050565b60006101008201905060018060a01b038416825282356020830152602083013560408301526115db606083016040850180358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b82815260c081016115db602083018480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118945761189461186b565b500190565b6000608082840312156118ab57600080fd5b6040516080810181811067ffffffffffffffff821117156118dc57634e487b7160e01b600052604160045260246000fd5b6040526118e883611674565b81526020830151602082015261190060408401611674565b6040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461194757600080fd5b80604085015250509392505050565b600060e0828403121561196857600080fd5b60405160e0810181811067ffffffffffffffff8211171561199957634e487b7160e01b600052604160045260246000fd5b6040526119a583611674565b8152602083015160208201526119bd60408401611674565b6040820152606083015160608201526119d860808401611674565b608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016115db602083018480358252602090810135910152565b600060408284031215611a3457600080fd5b6040516040810181811067ffffffffffffffff82111715611a6557634e487b7160e01b600052604160045260246000fd5b604052611a7183611674565b8152602083015160208201528091505092915050565b600060c08284031215611a9957600080fd5b60405160c0810181811067ffffffffffffffff82111715611aca57634e487b7160e01b600052604160045260246000fd5b604052611ad683611674565b815260208301516020820152611aee60408401611674565b604082015260608301516060820152611b0960808401611674565b608082015260a083015160a08201528091505092915050565b6000816000190483118215151615611b3c57611b3c61186b565b50029056fea26469706673582212205054af048b0801908168fec3b70954a3f3181bd5c45a651a86b9804f217e397764736f6c634300080c0033`,
  BytecodeLen: 7708,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:147:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:147:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: '<builtin>',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:77:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:86:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:94:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:102:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "NumGenAi": NumGenAi,
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
