(function (e) {
    function t(t) {
      for (var a, i, r = t[0], p = t[1], o = t[2], y = 0, d = [
      ]; y < r.length; y++) i = r[y],
      Object.prototype.hasOwnProperty.call(s, i) && s[i] && d.push(s[i][0]),
      s[i] = 0;
      for (a in p) Object.prototype.hasOwnProperty.call(p, a) && (e[a] = p[a]);
      l && l(t);
      while (d.length) d.shift() ();
      return u.push.apply(u, o || [
      ]),
      n()
    }
    function n() {
      for (var e, t = 0; t < u.length; t++) {
        for (var n = u[t], a = !0, i = 1; i < n.length; i++) {
          var r = n[i];
          0 !== s[r] && (a = !1)
        }
        a && (u.splice(t--, 1), e = p(p.s = n[0]))
      }
      return e
    }
    var a = {
    },
    i = {
      app: 0
    },
    s = {
      app: 0
    },
    u = [
    ];
    function r(e) {
      return p.p + 'js/' + ({
      }
      [
        e
      ] || e) + '.' + {
        'chunk-0904f29d': '65b44077',
        'chunk-173c9c1c': '3b385291',
        'chunk-21a8cfc2': '474c2ff4',
        'chunk-0e5f709b': '1b73f23c',
        'chunk-4108a3da': '105f8ceb',
        'chunk-c0be7358': '339095ec',
        'chunk-6745df69': '40d7078f',
        'chunk-7411518b': '7d13aac6',
        'chunk-1425a14a': '53f01d10',
        'chunk-dd6bcf56': '14fbf31a',
        'chunk-51e1d042': '3d1d20f7',
        'chunk-5d41f9cc': '50a415a4',
        'chunk-3cf443bb': 'c0d8a272',
        'chunk-7bf51e22': '9d1357a4'
      }
      [
        e
      ] + '.js'
    }
    function p(t) {
      if (a[t]) return a[t].exports;
      var n = a[t] = {
        i: t,
        l: !1,
        exports: {
        }
      };
      return e[t].call(n.exports, n, n.exports, p),
      n.l = !0,
      n.exports
    }
    p.e = function (e) {
      var t = [
      ],
      n = {
        'chunk-0904f29d': 1,
        'chunk-173c9c1c': 1,
        'chunk-21a8cfc2': 1,
        'chunk-0e5f709b': 1,
        'chunk-4108a3da': 1,
        'chunk-c0be7358': 1,
        'chunk-6745df69': 1,
        'chunk-1425a14a': 1,
        'chunk-dd6bcf56': 1,
        'chunk-51e1d042': 1,
        'chunk-5d41f9cc': 1,
        'chunk-3cf443bb': 1,
        'chunk-7bf51e22': 1
      };
      i[e] ? t.push(i[e]) : 0 !== i[e] && n[e] && t.push(i[e] = new Promise((function (t, n) {
        for (var a = 'css/' + ({
        }
        [
          e
        ] || e) + '.' + {
          'chunk-0904f29d': 'c9ea8bf1',
          'chunk-173c9c1c': '80661625',
          'chunk-21a8cfc2': '90b8672f',
          'chunk-0e5f709b': 'e134743f',
          'chunk-4108a3da': '29605316',
          'chunk-c0be7358': '80a39bc3',
          'chunk-6745df69': '9af6c78d',
          'chunk-7411518b': '31d6cfe0',
          'chunk-1425a14a': '41667d1d',
          'chunk-dd6bcf56': '0bb0bcab',
          'chunk-51e1d042': 'f752b199',
          'chunk-5d41f9cc': '98f047ea',
          'chunk-3cf443bb': '28b74fd9',
          'chunk-7bf51e22': '8a679176'
        }
        [
          e
        ] + '.css', s = p.p + a, u = document.getElementsByTagName('link'), r = 0; r < u.length; r++) {
          var o = u[r],
          y = o.getAttribute('data-href') || o.getAttribute('href');
          if ('stylesheet' === o.rel && (y === a || y === s)) return t()
        }
        var d = document.getElementsByTagName('style');
        for (r = 0; r < d.length; r++) {
          o = d[r],
          y = o.getAttribute('data-href');
          if (y === a || y === s) return t()
        }
        var l = document.createElement('link');
        l.rel = 'stylesheet',
        l.type = 'text/css',
        l.onload = t,
        l.onerror = function (t) {
          var a = t && t.target && t.target.src || s,
          u = new Error('Loading CSS chunk ' + e + ' failed.\n(' + a + ')');
          u.code = 'CSS_CHUNK_LOAD_FAILED',
          u.request = a,
          delete i[e],
          l.parentNode.removeChild(l),
          n(u)
        },
        l.href = s;
        var c = document.getElementsByTagName('head') [0];
        c.appendChild(l)
      })).then((function () {
        i[e] = 0
      })));
      var a = s[e];
      if (0 !== a) if (a) t.push(a[2]);
       else {
        var u = new Promise((function (t, n) {
          a = s[e] = [
            t,
            n
          ]
        }));
        t.push(a[2] = u);
        var o,
        y = document.createElement('script');
        y.charset = 'utf-8',
        y.timeout = 120,
        p.nc && y.setAttribute('nonce', p.nc),
        y.src = r(e);
        var d = new Error;
        o = function (t) {
          y.onerror = y.onload = null,
          clearTimeout(l);
          var n = s[e];
          if (0 !== n) {
            if (n) {
              var a = t && ('load' === t.type ? 'missing' : t.type),
              i = t && t.target && t.target.src;
              d.message = 'Loading chunk ' + e + ' failed.\n(' + a + ': ' + i + ')',
              d.name = 'ChunkLoadError',
              d.type = a,
              d.request = i,
              n[1](d)
            }
            s[e] = void 0
          }
        };
        var l = setTimeout((function () {
          o({
            type: 'timeout',
            target: y
          })
        }), 120000);
        y.onerror = y.onload = o,
        document.head.appendChild(y)
      }
      return Promise.all(t)
    },
    p.m = e,
    p.c = a,
    p.d = function (e, t, n) {
      p.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    },
    p.r = function (e) {
      'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: 'Module'
      }),
      Object.defineProperty(e, '__esModule', {
        value: !0
      })
    },
    p.t = function (e, t) {
      if (1 & t && (e = p(e)), 8 & t) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (p.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: e
      }), 2 & t && 'string' != typeof e) for (var a in e) p.d(n, a, function (t) {
        return e[t]
      }.bind(null, a));
      return n
    },
    p.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e['default']
      }
       : function () {
        return e
      };
      return p.d(t, 'a', t),
      t
    },
    p.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    },
    p.p = '',
    p.oe = function (e) {
      throw console.error(e),
      e
    };
    var o = window['webpackJsonp'] = window['webpackJsonp'] || [
    ],
    y = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var d = 0; d < o.length; d++) t(o[d]);
    var l = y;
    u.push([0,
    'chunk-vendors']),
    n()
  }) ({
    0: function (e, t, n) {
      e.exports = n('56d7')
    },
    1: function (e, t) {
    },
    10: function (e, t) {
    },
    11: function (e, t) {
    },
    12: function (e, t) {
    },
    13: function (e, t) {
    },
    14: function (e, t) {
    },
    15: function (e, t) {
    },
    16: function (e, t) {
    },
    17: function (e, t) {
    },
    18: function (e, t) {
    },
    2: function (e, t) {
    },
    2395: function (e, t, n) {
    },
    3: function (e, t) {
    },
    3394: function (e, t, n) {
    },
    4: function (e, t) {
    },
    4360: function (e, t, n) {
      'use strict';
      n('e9c4');
      var a = n('2b0e'),
      i = n('2f62');
      a['a'].use(i['a']);
      var s = new i['a'].Store({
        state: {
          address: localStorage.getItem('address'),
          isStartIn: !1,
          bodyNum: localStorage.getItem(localStorage.getItem('role_id') + '-bodyNum') || 0,
          ROLE_ID: localStorage.getItem('role_id'),
          ROLE_TOKEN_LIST: localStorage.getItem('role_token_list'),
          ROLE_IMG: localStorage.getItem('role_img'),
          ROLE_INFO: localStorage.getItem('role_info'),
          LUCKY_NUM: localStorage.getItem('lucky_num'),
          TOTAL_POWER: localStorage.getItem('total_power'),
          SAET: localStorage.getItem('saet'),
          SCGT: localStorage.getItem('scgt'),
          LAT: localStorage.getItem('lat'),
          UPGRADE_LEFT: localStorage.getItem('upgrade_left'),
          UPGRADE_RIGHT: localStorage.getItem('upgrade_right'),
          ROLE_ID_IMG: localStorage.getItem(localStorage.getItem('role_id')),
          SA_NFT_IMG: localStorage.getItem('sa_nft_img'),
          SA_NFT_IMG_POWER: localStorage.getItem('sa_nft_img_power'),
          STAKE_LIST: localStorage.getItem('stake_list') || [
          ]
        },
        mutations: {
          stake_list: function (e, t) {
            e.STAKE_LIST = t,
            localStorage.setItem('stake_list', t)
          },
          address: function (e, t) {
            e.address = t,
            localStorage.setItem('address', t)
          },
          startChange: function (e) {
            e.isStartIn = !0
          },
          setBody: function (e, t) {
            e.bodyNum = t,
            localStorage.setItem(e.ROLE_ID + '-bodyNum', t)
          },
          role_id: function (e, t) {
            e.ROLE_ID = t,
            localStorage.setItem('role_id', t)
          },
          role_token_list: function (e, t) {
            var n = JSON.stringify(t);
            e.ROLE_TOKEN_LIST = n,
            localStorage.setItem('role_token_list', n)
          },
          role_id_img: function (e, t) {
            e.ROLE_ID_IMG = t,
            localStorage.setItem(e.ROLE_ID, t)
          },
          sa_nft_img: function (e, t) {
            e.SA_NFT_IMG = t,
            localStorage.setItem(e.SA_NFT_IMG, t)
          },
          sa_nft_img_power: function (e, t) {
            e.SA_NFT_IMG_POWER = t,
            localStorage.setItem(e.SA_NFT_IMG_POWER, t)
          },
          role_id_img_update: function (e, t) {
            localStorage.setItem(t, e.ROLE_ID_IMG),
            localStorage.removeItem(e.ROLE_ID)
          },
          role_img: function (e, t) {
            e.ROLE_IMG = t,
            localStorage.setItem('role_img', t)
          },
          role_info: function (e, t) {
            var n = {
              powerFactor: t.powerFactor,
              tokenId: t.tokenId,
              tokenList: t.tokenList,
              totalPower: t.totalPower
            };
            e.ROLE_INFO = JSON.stringify(n),
            localStorage.setItem('role_info', JSON.stringify(n))
          },
          total_power: function (e, t) {
            e.TOTAL_POWER = t,
            localStorage.setItem('total_power', t)
          },
          lucky_num: function (e, t) {
            e.LUCKY_NUM = t,
            localStorage.setItem('lucky_num', t)
          },
          saet: function (e, t) {
            e.SAET = t,
            localStorage.setItem('saet', t)
          },
          scgt: function (e, t) {
            e.SCGT = t,
            localStorage.setItem('scgt', t)
          },
          lat: function (e, t) {
            e.LAT = t,
            localStorage.setItem('lat', t)
          },
          upgrade_left: function (e, t) {
            e.UPGRADE_LEFT = t,
            localStorage.setItem('upgrade_left', t)
          },
          upgrade_right: function (e, t) {
            e.UPGRADE_RIGHT = t,
            localStorage.setItem('upgrade_right', t)
          }
        },
        actions: {
          changeRoleId: function (e, t) {
            var n = e.commit;
            n('role_id', t)
          },
          changeRoleTokenList: function (e, t) {
            var n = e.commit;
            n('role_token_list', t)
          },
          saveRoleImg: function (e, t) {
            var n = e.commit;
            n('role_img', t)
          },
          changeRoleInfo: function (e, t) {
            var n = e.commit;
            n('role_info', t)
          },
          changeTotalPower: function (e, t) {
            var n = e.commit;
            n('total_power', t)
          },
          changeLuckyNum: function (e, t) {
            var n = e.commit;
            n('lucky_num', t)
          },
          changeSAET: function (e, t) {
            var n = e.commit;
            n('saet', t)
          },
          changeSCGT: function (e, t) {
            var n = e.commit;
            n('scgt', t)
          },
          changeLAT: function (e, t) {
            var n = e.commit;
            n('lat', t)
          },
          changeUpgradeLeft: function (e, t) {
            var n = e.commit;
            n('upgrade_left', t)
          },
          changeUpgradeRight: function (e, t) {
            var n = e.commit;
            n('upgrade_right', t)
          }
        }
      });
      t['a'] = s
    },
    '4c97': function (e, t, n) {
      'use strict';
      var a = n('3835'),
      i = n('b85c'),
      s = n('1da1'),
      u = (n('96cf'), n('d3b7'), n('b64b'), n('ac1f'), n('5319'), n('e9c4'), n('25f0'), n('a9e3'), n('5b81'), n('2eaf')),
      r = n('99e5'),
      p = n.n(r),
      o = n('a18c'),
      y = n('bc3a'),
      d = n.n(y),
      l = [
        {
          inputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          inputs: [
            {
              internalType: 'uint32',
              name: 'numWords',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'returnValueLength',
              type: 'uint256'
            }
          ],
          name: 'InvalidRandomWords',
          type: 'error'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'burnType',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            }
          ],
          name: 'BurnCharacter',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'burnType',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            }
          ],
          name: 'BurnTokenInfo',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            }
          ],
          name: 'FirstMint',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'powerFactor',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'token0',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'token1',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'token2',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint32',
              name: 'totalPower',
              type: 'uint32'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'characterType',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'mintType',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            }
          ],
          name: 'MintCharacter',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'position',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'rare',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              indexed: !1,
              internalType: 'uint32',
              name: 'suitId',
              type: 'uint32'
            },
            {
              indexed: !1,
              internalType: 'uint32',
              name: 'power',
              type: 'uint32'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'level',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'mintType',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            }
          ],
          name: 'MintTokenInfo',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'creator',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'position',
              type: 'uint8'
            },
            {
              indexed: !1,
              internalType: 'uint8',
              name: 'rare',
              type: 'uint8'
            },
            {
              indexed: !0,
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'suitId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'NewTokenType',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: '_erc721Proxy',
          outputs: [
            {
              internalType: 'contract IERC721Proxy',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint8',
              name: 'position',
              type: 'uint8'
            },
            {
              internalType: 'uint8',
              name: 'rare',
              type: 'uint8'
            },
            {
              internalType: 'string',
              name: 'color',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'power',
              type: 'uint256'
            },
            {
              internalType: 'string[]',
              name: 'names',
              type: 'string[]'
            },
            {
              internalType: 'uint32[]',
              name: 'suits',
              type: 'uint32[]'
            }
          ],
          name: 'addPartsType',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'addresses',
              type: 'address[]'
            },
            {
              internalType: 'uint256',
              name: 'count',
              type: 'uint256'
            }
          ],
          name: 'addWL',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint8',
              name: 'count',
              type: 'uint8'
            }
          ],
          name: 'buyLuckyStone',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'checkWL',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint32',
              name: 'mapId',
              type: 'uint32'
            },
            {
              internalType: 'uint256[]',
              name: 'mapTokenList',
              type: 'uint256[]'
            }
          ],
          name: 'exchangeToken',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            }
          ],
          name: 'isNameExist',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint8',
              name: 'characterType',
              type: 'uint8'
            }
          ],
          name: 'mint',
          outputs: [
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'uint32',
              name: 'suitId',
              type: 'uint32'
            }
          ],
          name: 'newTokenType',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint8',
              name: 'characterType',
              type: 'uint8'
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint8',
              name: 'count',
              type: 'uint8'
            }
          ],
          name: 'ownerMint',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'queryAccount',
          outputs: [
            {
              components: [
                {
                  internalType: 'bool',
                  name: '_creationFlag',
                  type: 'bool'
                },
                {
                  internalType: 'uint32',
                  name: '_luckyNum',
                  type: 'uint32'
                }
              ],
              internalType: 'struct LibStoneAeon.Account',
              name: 'account',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryBaseInfo',
          outputs: [
            {
              internalType: 'uint256',
              name: 'baseFee',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'incrPerNum',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'incrFee',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'decrBlockNum',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'decrFee',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'lastestCreateBlock',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'totalSuitNum',
              type: 'uint32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            }
          ],
          name: 'queryCharacter',
          outputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'powerFactor',
              type: 'uint32'
            },
            {
              internalType: 'uint256[]',
              name: 'tokenList',
              type: 'uint256[]'
            },
            {
              internalType: 'uint32',
              name: 'totalPower',
              type: 'uint32'
            },
            {
              internalType: 'uint32',
              name: 'totalDur',
              type: 'uint32'
            },
            {
              internalType: 'uint8',
              name: 'characterType',
              type: 'uint8'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryCharacterCount',
          outputs: [
            {
              internalType: 'uint32',
              name: '',
              type: 'uint32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint8',
              name: 'rare',
              type: 'uint8'
            }
          ],
          name: 'queryColorByRare',
          outputs: [
            {
              internalType: 'string',
              name: 'color',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryLuckyStonePrice',
          outputs: [
            {
              internalType: 'uint32',
              name: '',
              type: 'uint32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryMapInfo',
          outputs: [
            {
              internalType: 'address[]',
              name: 'addresses',
              type: 'address[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint32',
              name: 'suitId',
              type: 'uint32'
            }
          ],
          name: 'querySuitOwner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'queryToken',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint8',
                  name: '_position',
                  type: 'uint8'
                },
                {
                  internalType: 'uint8',
                  name: '_rare',
                  type: 'uint8'
                },
                {
                  internalType: 'string',
                  name: '_name',
                  type: 'string'
                },
                {
                  internalType: 'uint32',
                  name: '_suitId',
                  type: 'uint32'
                },
                {
                  internalType: 'uint32',
                  name: '_power',
                  type: 'uint32'
                },
                {
                  internalType: 'uint8',
                  name: '_level',
                  type: 'uint8'
                },
                {
                  internalType: 'bool',
                  name: '_createFlag',
                  type: 'bool'
                },
                {
                  internalType: 'uint256',
                  name: '_wearToken',
                  type: 'uint256'
                }
              ],
              internalType: 'struct LibStoneAeon.TokenInfo',
              name: 'tokenInfo',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'queryTokenType',
          outputs: [
            {
              internalType: 'uint8',
              name: 'tokenType',
              type: 'uint8'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'proxyAddress',
              type: 'address'
            }
          ],
          name: 'setERC721Proxy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'governaceAddress',
              type: 'address'
            }
          ],
          name: 'setGovernaceAddress',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'mapAddress',
              type: 'address[]'
            }
          ],
          name: 'setMapAddress',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint32',
              name: 'maxPosition',
              type: 'uint32'
            }
          ],
          name: 'setMaxPosition',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'baseFee',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'incrPerNum',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'incrFee',
              type: 'uint256'
            },
            {
              internalType: 'uint32',
              name: 'decrBlockNum',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'decrFee',
              type: 'uint256'
            }
          ],
          name: 'setMintFee',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address'
            }
          ],
          name: 'setTokenAddress',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              internalType: 'uint8[]',
              name: 'positions',
              type: 'uint8[]'
            }
          ],
          name: 'takeOff',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'firstTokenId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'secondTokenId',
              type: 'uint256'
            }
          ],
          name: 'upgradeToken',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256[]',
              name: 'tokenId',
              type: 'uint256[]'
            }
          ],
          name: 'useLuckyStone',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              internalType: 'uint256[]',
              name: 'tokenList',
              type: 'uint256[]'
            }
          ],
          name: 'wear',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      c = [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'approved',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'ApprovalForAll',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'burnBy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'contractURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'mintBy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'setApprovalForAll',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setBaseURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setContractURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_stoneAeonContract',
              type: 'address'
            }
          ],
          name: 'setstoneAeonContract',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'stoneAeonContract',
          outputs: [
            {
              internalType: 'contract IStoneAeon',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenOfOwnerByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: 'output',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      m = [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string'
            },
            {
              internalType: 'address',
              name: 'erc721ProxyAddr',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'stoneAeonAddr',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'NewOwnership',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'NewPendingOwnership',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'redeemBn',
              type: 'uint256'
            }
          ],
          name: 'RedeemEvent',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'power',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'stakeBn',
              type: 'uint256'
            }
          ],
          name: 'StakeEvent',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'ARMS_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'CLOTHING_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'MAX_STAKE_BN',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'MINING_BASE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'PET_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REDUCE_REWARD_BN',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REDUCE_REWARD_INTERVAL_BN',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REDUCE_REWARD_PER',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REWARD_MAX_PER',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REWARD_MIN_PER',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'acceptOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            }
          ],
          name: 'allowance',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'burn',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'burnFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'decimals',
          outputs: [
            {
              internalType: 'uint8',
              name: '',
              type: 'uint8'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'subtractedValue',
              type: 'uint256'
            }
          ],
          name: 'decreaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'erc721Proxy',
          outputs: [
            {
              internalType: 'contract IERC721Proxy',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'governor',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'addedValue',
              type: 'uint256'
            }
          ],
          name: 'increaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'pendingGovernor',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'redeem',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'rules',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'sellTokenInfo',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'proxyAddr',
              type: 'address'
            }
          ],
          name: 'setERC721Proxy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'miningBase',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reduceRewardBn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reduceRewardIntervalBn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'maxStakeBn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'rewardMinPer',
              type: 'uint256'
            }
          ],
          name: 'setMiningInfo',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'stoneAeonAddr',
              type: 'address'
            }
          ],
          name: 'setStoneAeon',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'stake',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'stakeAmount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'stakeInfo',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'stakeReward',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'stakeTokenIdList',
          outputs: [
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'stoneAeon',
          outputs: [
            {
              internalType: 'contract IStoneAeon',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'recipient',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'transfer',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'recipient',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_newGovernor',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      T = [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string'
            },
            {
              internalType: 'address',
              name: 'proxyAddr',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'stoneAeonAddr',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          inputs: [
            {
              internalType: 'uint32',
              name: 'numWords',
              type: 'uint32'
            },
            {
              internalType: 'uint256',
              name: 'returnValueLength',
              type: 'uint256'
            }
          ],
          name: 'InvalidRandomWords',
          type: 'error'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'approved',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'ApprovalForAll',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'redeemBn',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'pb',
              type: 'uint256'
            }
          ],
          name: 'RedeemEvent',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'power',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'stakeBn',
              type: 'uint256'
            }
          ],
          name: 'StakeEvent',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'BASE_WINNING_PR',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'INTERVAL_BN',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'MINING_BASE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'MIN_STAKING_POWER',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'MIN_WINNING_PR',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'REDUCE_WINNING_PR',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'contractURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'erc721Proxy',
          outputs: [
            {
              internalType: 'contract IERC721Proxy',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'redeem',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'rules',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'setApprovalForAll',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setBaseURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setContractURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'proxyAddr',
              type: 'address'
            }
          ],
          name: 'setERC721Proxy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'reduceWinningPr',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'minWinningPr',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'baseWinningPr',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'miningBase',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'intervalBn',
              type: 'uint256'
            }
          ],
          name: 'setMiningInfo',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'revealedBaseURI',
              type: 'string'
            }
          ],
          name: 'setRevealedBaseURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'stoneAeonAddr',
              type: 'address'
            }
          ],
          name: 'setStoneAeon',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'stake',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'stakeAmount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'stakeInfo',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'stakeTokenIdList',
          outputs: [
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'stoneAeon',
          outputs: [
            {
              internalType: 'contract IStoneAeon',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenOfOwnerByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      f = [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'buyOrder',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'cancelOrder',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'characterId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256'
            }
          ],
          name: 'sellOrder',
          outputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'scgtAddress',
              type: 'address'
            }
          ],
          name: 'setScgt',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'proxyAddress',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'saAddress',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'scgtAddress',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'proxyAddress',
              type: 'address'
            }
          ],
          name: 'setERC721Proxy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'saAddress',
              type: 'address'
            }
          ],
          name: 'setsaAddress',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_erc721Proxy',
          outputs: [
            {
              internalType: 'contract IERC721Proxy',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'queryOrderInfo',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_orderSn',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tabId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyCharacterId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_sellCharacterId',
                  type: 'uint256'
                },
                {
                  components: [
                    {
                      internalType: 'uint256',
                      name: '_tokenId',
                      type: 'uint256'
                    },
                    {
                      internalType: 'uint8',
                      name: '_position',
                      type: 'uint8'
                    },
                    {
                      internalType: 'uint8',
                      name: '_rare',
                      type: 'uint8'
                    },
                    {
                      internalType: 'string',
                      name: '_name',
                      type: 'string'
                    },
                    {
                      internalType: 'uint32',
                      name: '_suitId',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint32',
                      name: '_power',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint8',
                      name: '_level',
                      type: 'uint8'
                    },
                    {
                      internalType: 'bool',
                      name: '_createFlag',
                      type: 'bool'
                    },
                    {
                      internalType: 'uint256',
                      name: '_wearToken',
                      type: 'uint256'
                    }
                  ],
                  internalType: 'struct LibStoneAeon.TokenInfo',
                  name: '_tokenInfo',
                  type: 'tuple'
                },
                {
                  internalType: 'uint8',
                  name: '_characterType',
                  type: 'uint8'
                },
                {
                  internalType: 'uint32',
                  name: '_characterPower',
                  type: 'uint32'
                }
              ],
              internalType: 'struct LibStoneAeon.Order',
              name: 'order',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryOrderTabList',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'tabs',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tabId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pageNum',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pageSize',
              type: 'uint256'
            }
          ],
          name: 'queryOwnerOrderList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_orderSn',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tabId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyCharacterId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_sellCharacterId',
                  type: 'uint256'
                },
                {
                  components: [
                    {
                      internalType: 'uint256',
                      name: '_tokenId',
                      type: 'uint256'
                    },
                    {
                      internalType: 'uint8',
                      name: '_position',
                      type: 'uint8'
                    },
                    {
                      internalType: 'uint8',
                      name: '_rare',
                      type: 'uint8'
                    },
                    {
                      internalType: 'string',
                      name: '_name',
                      type: 'string'
                    },
                    {
                      internalType: 'uint32',
                      name: '_suitId',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint32',
                      name: '_power',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint8',
                      name: '_level',
                      type: 'uint8'
                    },
                    {
                      internalType: 'bool',
                      name: '_createFlag',
                      type: 'bool'
                    },
                    {
                      internalType: 'uint256',
                      name: '_wearToken',
                      type: 'uint256'
                    }
                  ],
                  internalType: 'struct LibStoneAeon.TokenInfo',
                  name: '_tokenInfo',
                  type: 'tuple'
                },
                {
                  internalType: 'uint8',
                  name: '_characterType',
                  type: 'uint8'
                },
                {
                  internalType: 'uint32',
                  name: '_characterPower',
                  type: 'uint32'
                }
              ],
              internalType: 'struct LibStoneAeon.Order[]',
              name: 'orders',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tabId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pageNum',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pageSize',
              type: 'uint256'
            }
          ],
          name: 'queryStoreOrderList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_orderSn',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tabId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyCharacterId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_sellCharacterId',
                  type: 'uint256'
                },
                {
                  components: [
                    {
                      internalType: 'uint256',
                      name: '_tokenId',
                      type: 'uint256'
                    },
                    {
                      internalType: 'uint8',
                      name: '_position',
                      type: 'uint8'
                    },
                    {
                      internalType: 'uint8',
                      name: '_rare',
                      type: 'uint8'
                    },
                    {
                      internalType: 'string',
                      name: '_name',
                      type: 'string'
                    },
                    {
                      internalType: 'uint32',
                      name: '_suitId',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint32',
                      name: '_power',
                      type: 'uint32'
                    },
                    {
                      internalType: 'uint8',
                      name: '_level',
                      type: 'uint8'
                    },
                    {
                      internalType: 'bool',
                      name: '_createFlag',
                      type: 'bool'
                    },
                    {
                      internalType: 'uint256',
                      name: '_wearToken',
                      type: 'uint256'
                    }
                  ],
                  internalType: 'struct LibStoneAeon.TokenInfo',
                  name: '_tokenInfo',
                  type: 'tuple'
                },
                {
                  internalType: 'uint8',
                  name: '_characterType',
                  type: 'uint8'
                },
                {
                  internalType: 'uint32',
                  name: '_characterPower',
                  type: 'uint32'
                }
              ],
              internalType: 'struct LibStoneAeon.Order[]',
              name: 'orders',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'scgt',
          outputs: [
            {
              internalType: 'contract IEVToken',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'stoneAeon',
          outputs: [
            {
              internalType: 'contract IStoneAeon',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      ],
      h = [
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'addresses',
              type: 'address[]'
            }
          ],
          name: 'addCWL',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'addresses',
              type: 'address[]'
            }
          ],
          name: 'addKOL',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'addresses',
              type: 'address[]'
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'count',
              type: 'uint256'
            }
          ],
          name: 'addWL',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'approved',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'ApprovalForAll',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'numberOfTokens',
              type: 'uint256'
            }
          ],
          name: 'mint',
          outputs: [
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'numberOfTokens',
              type: 'uint256'
            }
          ],
          name: 'mintWL',
          outputs: [
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'setApprovalForAll',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setBaseURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setContractURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: 'flag',
              type: 'bool'
            }
          ],
          name: 'setSaleFlag',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'URI',
              type: 'string'
            }
          ],
          name: 'setTokenURI',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_CommonPrice',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_contractURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_CurrentSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_IsOpen',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_KOLCount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_SATotal',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_tokenBaseURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_WLPrice',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'checkWL',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'contractURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'getSaleInfo',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'getTokenWLP',
          outputs: [
            {
              internalType: 'bool',
              name: '_valid',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: '_Pricewl',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_Price',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_BuyCount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_BuyRemain',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenOfOwnerByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      ],
      b = [
        {
          inputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'Claim',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'delegator',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'fromDelegate',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'toDelegate',
              type: 'address'
            }
          ],
          name: 'DelegateChanged',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'delegate',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'previousBalance',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'newBalance',
              type: 'uint256'
            }
          ],
          name: 'DelegateVotesChanged',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'Freeze',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'FrozenTransfer',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'Melt',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'MintFrozen',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousMinter',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newMinter',
              type: 'address'
            }
          ],
          name: 'MinterTransferred',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'Upgrade',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'src',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'wad',
              type: 'uint256'
            }
          ],
          name: 'Withdrawal',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'DOMAIN_SEPARATOR',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: '_currentSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'addToMinters',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            }
          ],
          name: 'allowance',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'burn',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'burnFrom',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint32',
              name: 'pos',
              type: 'uint32'
            }
          ],
          name: 'checkpoints',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint32',
                  name: 'fromBlock',
                  type: 'uint32'
                },
                {
                  internalType: 'uint224',
                  name: 'votes',
                  type: 'uint224'
                }
              ],
              internalType: 'struct ERC20Votes.Checkpoint',
              name: '',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'claimMinterAdmin',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'claimTokens',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'currentSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'decimals',
          outputs: [
            {
              internalType: 'uint8',
              name: '',
              type: 'uint8'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'subtractedValue',
              type: 'uint256'
            }
          ],
          name: 'decreaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegatee',
              type: 'address'
            }
          ],
          name: 'delegate',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegatee',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'expiry',
              type: 'uint256'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'delegateBySig',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'delegates',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'frozenBalanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'blockNumber',
              type: 'uint256'
            }
          ],
          name: 'getPastTotalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'blockNumber',
              type: 'uint256'
            }
          ],
          name: 'getPastVotes',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'getVotes',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'addedValue',
              type: 'uint256'
            }
          ],
          name: 'increaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'lastestFreezeBlock',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'maxTotalSupplyLimit',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'accounts',
              type: 'address[]'
            },
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            },
            {
              internalType: 'enum SCGTToken.RoleType',
              name: '_role',
              type: 'uint8'
            }
          ],
          name: 'mintBatchFrozenTokensForRole',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            },
            {
              internalType: 'enum SCGTToken.RoleType',
              name: '_role',
              type: 'uint8'
            }
          ],
          name: 'mintFrozenTokensForRole',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'minteradmin',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'monthIntervalBlock',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'nonces',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'numCheckpoints',
          outputs: [
            {
              internalType: 'uint32',
              name: '',
              type: 'uint32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'pendingMinterAdmin',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'permit',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'queryFreezeAmount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'readyRule',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'removeFromMinters',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_role',
              type: 'uint256'
            }
          ],
          name: 'roleRemainAmount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'roleType',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'ruleReady',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'startBlock',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalSupplyLimit',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'transfer',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address[]',
              name: 'recipients',
              type: 'address[]'
            },
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          name: 'transferBatch',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newMinter',
              type: 'address'
            }
          ],
          name: 'transferMinterAdmin',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_token',
              type: 'address'
            },
            {
              internalType: 'address payable',
              name: '_recipient',
              type: 'address'
            }
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      w = [
        {
          inputs: [
            {
              internalType: 'address',
              name: '_factory',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '_WETH',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          inputs: [
          ],
          name: 'WETH',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'factory',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          stateMutability: 'payable',
          type: 'receive'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amountADesired',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountBDesired',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountAMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountBMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'addLiquidity',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountA',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountB',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'token',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenDesired',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETHMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'addLiquidityETH',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountToken',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETH',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            }
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountAMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountBMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'removeLiquidity',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountA',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountB',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'token',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETHMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'removeLiquidityETH',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountToken',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETH',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountAMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountBMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'approveMax',
              type: 'bool'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'removeLiquidityWithPermit',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountA',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountB',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'token',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETHMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'approveMax',
              type: 'bool'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'removeLiquidityETHWithPermit',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountToken',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETH',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'token',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETHMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountETH',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'token',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountTokenMin',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountETHMin',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'approveMax',
              type: 'bool'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountETH',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactTokensForTokens',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountInMax',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapTokensForExactTokens',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactETHForTokens',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountInMax',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapTokensForExactETH',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactTokensForETH',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapETHForExactTokens',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
          outputs: [
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amountOutMin',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            }
          ],
          name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountA',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveA',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveB',
              type: 'uint256'
            }
          ],
          name: 'quote',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountB',
              type: 'uint256'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveOut',
              type: 'uint256'
            }
          ],
          name: 'getAmountOut',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveIn',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'reserveOut',
              type: 'uint256'
            }
          ],
          name: 'getAmountIn',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            }
          ],
          name: 'getAmountsOut',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountOut',
              type: 'uint256'
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]'
            }
          ],
          name: 'getAmountsIn',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      ],
      v = [
        {
          inputs: [
            {
              internalType: 'address',
              name: '_feeToSetter',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'token0',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'token1',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'address',
              name: 'pair',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'PairCreated',
          type: 'event'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'INIT_CODE_PAIR_HASH',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'allPairs',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'feeTo',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'feeToSetter',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'getPair',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'allPairsLength',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address'
            }
          ],
          name: 'createPair',
          outputs: [
            {
              internalType: 'address',
              name: 'pair',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: '_feeTo',
              type: 'address'
            }
          ],
          name: 'setFeeTo',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: '_feeToSetter',
              type: 'address'
            }
          ],
          name: 'setFeeToSetter',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      g = [
        {
          inputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount0',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount1',
              type: 'uint256'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'Burn',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount0',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount1',
              type: 'uint256'
            }
          ],
          name: 'Mint',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount0In',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount1In',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount0Out',
              type: 'uint256'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount1Out',
              type: 'uint256'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'Swap',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: 'uint112',
              name: 'reserve0',
              type: 'uint112'
            },
            {
              indexed: !1,
              internalType: 'uint112',
              name: 'reserve1',
              type: 'uint112'
            }
          ],
          name: 'Sync',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'DOMAIN_SEPARATOR',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'DOMAIN_SEPARATOR_NEW',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'MINIMUM_LIQUIDITY',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'PERMIT_TYPEHASH',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'allowance',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'decimals',
          outputs: [
            {
              internalType: 'uint8',
              name: '',
              type: 'uint8'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'factory',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'kLast',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'nonces',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8'
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32'
            }
          ],
          name: 'permit',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'price0CumulativeLast',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'price1CumulativeLast',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'token0',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'token1',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'transfer',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !0,
          inputs: [
          ],
          name: 'getReserves',
          outputs: [
            {
              internalType: 'uint112',
              name: '_reserve0',
              type: 'uint112'
            },
            {
              internalType: 'uint112',
              name: '_reserve1',
              type: 'uint112'
            },
            {
              internalType: 'uint32',
              name: '_blockTimestampLast',
              type: 'uint32'
            }
          ],
          payable: !1,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: '_token0',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '_token1',
              type: 'address'
            }
          ],
          name: 'initialize',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'mint',
          outputs: [
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'burn',
          outputs: [
            {
              internalType: 'uint256',
              name: 'amount0',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amount1',
              type: 'uint256'
            }
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount0Out',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'amount1Out',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes'
            }
          ],
          name: 'swap',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'skim',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: !1,
          inputs: [
          ],
          name: 'sync',
          outputs: [
          ],
          payable: !1,
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      A = [
        {
          inputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'NewOwnership',
          type: 'event'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'to',
              type: 'address'
            }
          ],
          name: 'NewPendingOwnership',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'acceptOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'allBettingList',
          outputs: [
            {
              internalType: 'uint256',
              name: 'bettingNo',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'expect',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            },
            {
              internalType: 'bytes32',
              name: 'hash',
              type: 'bytes32'
            },
            {
              internalType: 'uint256',
              name: 'result',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'odds',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'winAmount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'bettingResult',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'bankerContract',
          outputs: [
            {
              internalType: 'contract IHashBoxBanker',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'betting',
          outputs: [
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'chargeFullRatio',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'governor',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'maxSelectCount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'pendingGovernor',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'platformChargeAddress',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'platformChargeFlag',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'platformChargeRatio',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryAllBettingInfoList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'bettingNo',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: 'sender',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'expect',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bn',
                  type: 'uint256'
                },
                {
                  internalType: 'bytes32',
                  name: 'hash',
                  type: 'bytes32'
                },
                {
                  internalType: 'uint256',
                  name: 'result',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'odds',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'winAmount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bettingResult',
                  type: 'uint256'
                }
              ],
              internalType: 'struct HashBox.BettingInfo[]',
              name: '_bettingInfoList',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'bettingNo',
              type: 'uint256'
            }
          ],
          name: 'queryBettingInfo',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'bettingNo',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: 'sender',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'expect',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bn',
                  type: 'uint256'
                },
                {
                  internalType: 'bytes32',
                  name: 'hash',
                  type: 'bytes32'
                },
                {
                  internalType: 'uint256',
                  name: 'result',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'odds',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'winAmount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bettingResult',
                  type: 'uint256'
                }
              ],
              internalType: 'struct HashBox.BettingInfo',
              name: '_bettingInfo',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryBettingInfoList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'bettingNo',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: 'sender',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'expect',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bn',
                  type: 'uint256'
                },
                {
                  internalType: 'bytes32',
                  name: 'hash',
                  type: 'bytes32'
                },
                {
                  internalType: 'uint256',
                  name: 'result',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'odds',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'winAmount',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: 'bettingResult',
                  type: 'uint256'
                }
              ],
              internalType: 'struct HashBox.BettingInfo[]',
              name: '_bettingInfoList',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryCapitalInfo',
          outputs: [
            {
              internalType: 'uint256',
              name: '_capitalPool',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_platformCharge',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_serviceCharge',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'ruleContract',
          outputs: [
            {
              internalType: 'contract IHashBoxRule',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'serviceChargeAddress',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'serviceChargeMin',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'serviceChargeRatio',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_bankerContractAddress',
              type: 'address'
            }
          ],
          name: 'setBankerContract',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_maxBetting',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_minBetting',
              type: 'uint256'
            }
          ],
          name: 'setBettingLimit',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_chargeFullRatio',
              type: 'uint256'
            }
          ],
          name: 'setChargeFullRatio',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_maxSelectCount',
              type: 'uint256'
            }
          ],
          name: 'setMaxSelectCount',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_bankerOdds',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_idleOdds',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_drawOdds',
              type: 'uint256'
            }
          ],
          name: 'setOdds',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_platformChargeFlag',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_platformChargeRatio',
              type: 'uint256'
            }
          ],
          name: 'setPlatformCharge',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_platformChargeAddress',
              type: 'address'
            }
          ],
          name: 'setPlatformChargeAddress',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_ruleContractAddress',
              type: 'address'
            }
          ],
          name: 'setRuleContract',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_serviceChargeRatio',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: '_serviceChargeAddress',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: '_serviceChargeMin',
              type: 'uint256'
            }
          ],
          name: 'setServiceCharge',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_settlerAddress',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: '_verify',
              type: 'bool'
            }
          ],
          name: 'setSettler',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address'
            }
          ],
          name: 'setTokenContract',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_caller',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: '_verify',
              type: 'bool'
            }
          ],
          name: 'setVerifyTransfer',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'settlementLast',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'settler',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'tokenContract',
          outputs: [
            {
              internalType: 'contract IERC20',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'transferBy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_newGovernor',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'unsettledList',
          outputs: [
            {
              internalType: 'uint256',
              name: 'bettingNo',
              type: 'uint256'
            },
            {
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'expect',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'bn',
              type: 'uint256'
            },
            {
              internalType: 'bytes32',
              name: 'hash',
              type: 'bytes32'
            },
            {
              internalType: 'uint256',
              name: 'result',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'odds',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'winAmount',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'bettingResult',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'userBettingNoList',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdraw',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'withdrawEther',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      M = m,
      I = [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'buy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'cancel',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256'
            }
          ],
          name: 'sell',
          outputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'SANFTAddress',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'SCGTAddress',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'SANFTAddress',
              type: 'address'
            }
          ],
          name: 'setSANFT',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'SCGTAddress',
              type: 'address'
            }
          ],
          name: 'setSCGT',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'orderId',
              type: 'uint256'
            }
          ],
          name: 'queryOrderInfo',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'string',
                  name: '_tokenURI',
                  type: 'string'
                }
              ],
              internalType: 'struct SANFTMarket.OrderInfo',
              name: 'order',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryOrderList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'string',
                  name: '_tokenURI',
                  type: 'string'
                }
              ],
              internalType: 'struct SANFTMarket.OrderInfo[]',
              name: 'orders',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryOwnerOrderList',
          outputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: '_orderId',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_price',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: '_sellAddress',
                  type: 'address'
                },
                {
                  internalType: 'address',
                  name: '_buyAddress',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: '_sellTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_buyTime',
                  type: 'uint256'
                },
                {
                  internalType: 'uint256',
                  name: '_tokenId',
                  type: 'uint256'
                },
                {
                  internalType: 'string',
                  name: '_tokenURI',
                  type: 'string'
                }
              ],
              internalType: 'struct SANFTMarket.OrderInfo[]',
              name: 'orders',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'SANFT',
          outputs: [
            {
              internalType: 'contract ISANFT',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'SCGT',
          outputs: [
            {
              internalType: 'contract IEVToken',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      ],
      k = T,
      _ = T,
      x = [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'PWCTAddress',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'ERC721ProxyAddress',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'PokerWorldAddress',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'DIAMOND_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'EMERALD_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'ERC721Proxy',
          outputs: [
            {
              internalType: 'contract IERC721Proxy',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'PWCT',
          outputs: [
            {
              internalType: 'contract IERC20',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'PokerWorld',
          outputs: [
            {
              internalType: 'contract IPokerWorld',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'RUBY_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'SAPPHIRE_SELL_PRICE',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'isActive',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256[]',
              name: 'tokenIdList',
              type: 'uint256[]'
            }
          ],
          name: 'recovery',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'ERC721ProxyAddress',
              type: 'address'
            }
          ],
          name: 'setERC721Proxy',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'PWCTAddress',
              type: 'address'
            }
          ],
          name: 'setPWCT',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'PokerWorldAddress',
              type: 'address'
            }
          ],
          name: 'setPokerWorld',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      P = [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'SCGTAddress',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: !0,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          inputs: [
          ],
          name: 'SCGT',
          outputs: [
            {
              internalType: 'contract IERC20',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryStakeAddressList',
          outputs: [
            {
              internalType: 'address[]',
              name: '_stakeAddressList',
              type: 'address[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'queryStakeInfo',
          outputs: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'sender',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256'
                }
              ],
              internalType: 'struct SCGTStakePool.StakeInfo',
              name: 'stakeInfo',
              type: 'tuple'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'queryStakeInfoList',
          outputs: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'sender',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256'
                }
              ],
              internalType: 'struct SCGTStakePool.StakeInfo[]',
              name: 'stakeInfoList',
              type: 'tuple[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'redeem',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'renounceOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: '_isActive',
              type: 'bool'
            }
          ],
          name: 'setIsActive',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'SCGTAddress',
              type: 'address'
            }
          ],
          name: 'setSCGT',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          name: 'stake',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'stakeAddressList',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          name: 'stakeInfoMap',
          outputs: [
            {
              internalType: 'address',
              name: 'sender',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
          ],
          name: 'totalStakeAmount',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      O = '0x7a1200',
      S = '0x77359400',
      C = !1,
      E = '0x240B4Bb768b9eC2ad8367988a45d14ce1b7c1019',
      B = '0x1eCA27c238d0590e9e52f38EB89F89D0b519B9b9',
      F = '0x4F21A89e169c77d1d8e86Cb23059aFCF08345644',
      L = '0xD70bFcB938dDC3967248616be23aAa6Fc5df5e6E',
      R = '0x0bcd981FD5B3372CF78A2Ce436f37E848279cF44',
      N = '0x08ad79D922Cb7Cb055d873B525f29137e60c270C',
      q = '0xd74c4276bf223b22de16e86006dae398748b6753',
      D = '0x0e16C1065d69f80F7E0948D566A267A63767a196',
      W = '0x78b674FBC75c43c3D91A35fFFA938268040C1990',
      G = '0x74Dd7b2dC60070516f26AcC30a5C734D3c87B2c9',
      U = '0x02406D561069cBed27eF8Ea20AFD41779A90e2Bf',
      H = '0x6Eb708855Dd3d6C9c02527fa3Fda7a0498273632',
      j = '0xB7037771d7c36208a1783c840a6243249d893D89',
      J = '0xdFBD9fda5ab106da3255f7d80339099A585e4f88',
      V = '0xf42257B894557822789ff71C0DD488bbCa826f16',
      z = '0x029bc2a4D76509630651c34fA40e8A98EB6b0F97',
      K = '0xB33bDd76FE0469b7e8236EE91BB89c13763B0BfB';
      C && (E = '0xAd40FdeA630f3eA06d632eD760AA68d4de9b5416', B = '0xa1AE7a4f90f8C1504474ac262241A02e5FdBe8a8', F = '0x47360Db20Da67eAbC4bA80a727eaF380141e1643', L = '0xef0f576AEaCb15D228df8Bdf1cb7694dabB81C97', R = '0xf85d380164DB0b28CE7ddfe7E889a21C2308305d', N = '0xbb4D76cb9042bE3C33C3709ae53369E03dc172EC', q = '0x65A1E638ccd11d1bA26EE7AE5FEcd50d1E2F247a', D = '0x3CF6D67917af21497af25Db37E1A99EF700C14c0', W = '0x714377e2443aAaF9e1Fcdf77358639c9E01f68E6', G = '0xF386b1DCc39cC40aa8f22c03FD6929F17021f6eE', U = '0xa0C63FAC4e5425F4721FF3258c3FA5B381152F73', J = '0xb53212168164F7459ebBe93fBa47C58159c9Ce65', V = '0xA6cDC5459A8602D5eDB3660aFf9141f5BB657857', z = '0x6f66CBdafB108358C659a873D32A486Ec9999e33');
      var $ = new p.a(window.ethereum),
      X = (window.web3, new $.eth.Contract(l, E)),
      Y = new $.eth.Contract(c, B),
      Q = new $.eth.Contract(m, F),
      Z = new $.eth.Contract(T, L),
      ee = new $.eth.Contract(k, R),
      te = new $.eth.Contract(_, K),
      ne = new $.eth.Contract(f, N),
      ae = new $.eth.Contract(h, q),
      ie = new $.eth.Contract(b, D),
      se = new $.eth.Contract(w, W),
      ue = new $.eth.Contract(v, G),
      re = new $.eth.Contract(A, j),
      pe = new $.eth.Contract(A, H),
      oe = new $.eth.Contract(M, U),
      ye = new $.eth.Contract(I, J),
      de = new $.eth.Contract(x, V),
      le = new $.eth.Contract(P, z),
      ce = '';
      'undefined' !== typeof window.ethereum && ($.currentProvider.on('accountsChanged', (function () {
        o['a'].push({
          path: '/start'
        })
      })), $.currentProvider.on('chainChanged', (function () {
        o['a'].push({
          path: '/start'
        })
      })));
      var me = '',
      Te = {
        sendGoogle: function (e, t, n, a) {
          console.log('even:' + e + '-event_category:' + t + '-event_label:' + n),
          window.gtag && window.gtag('event', e, {
            event_category: t,
            event_label: n,
            value: '1'
          })
        },
        web3init: function () {
          return 'undefined' !== typeof window.ethereum ? new Promise((function (e, t) {
            try {
              window.ethereum.request({
                method: 'eth_requestAccounts'
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          })) : new Promise((function (e, t) {
            t(new Error('Not Found Matamask'))
          }))
        },
        handleChainChanged: function (e) {
          window.location.reload()
        },
        handleAccountsChanged: function (e) {
          0 === e.length ? console.log('Please connect to MetaMask.') : '' == me ? (me = e[0], console.log('Account approved: ' + me)) : e[0] !== me && (console.log('Account changed.'), window.location.reload())
        },
        connect: function (e) {
          var t = this;
          return 1 == e ? 'undefined' !== typeof window.ethereum ? ($ = new p.a(window.ethereum), X = new $.eth.Contract(l, E), Y = new $.eth.Contract(c, B), Q = new $.eth.Contract(m, F), Z = new $.eth.Contract(T, L), ee = new $.eth.Contract(k, R), te = new $.eth.Contract(_, K), ne = new $.eth.Contract(f, N), ie = new $.eth.Contract(b, D), se = new $.eth.Contract(w, W), ue = new $.eth.Contract(v, G), re = new $.eth.Contract(A, j), pe = new $.eth.Contract(A, H), ye = new $.eth.Contract(I, J), de = new $.eth.Contract(x, V), le = new $.eth.Contract(P, z), me = '', $.currentProvider.on('accountsChanged', this.handleAccountsChanged), $.currentProvider.on('chainChanged', this.handleChainChanged), new Promise((function (e, t) {
            try {
              window.ethereum.request({
                method: 'eth_requestAccounts'
              }).then((function (n) {
                console.log('connect...');
                var a = '0';
                a = $.currentProvider.networkVersion;
                var i,
                s = $.currentProvider.chainId;
                0 == C ? 1 == a && '0x335f9' == s ? (me = n, e(n)) : (i = [
                  {
                    chainId: '0x335F9',
                    chainName: 'PlatON MainNetwork',
                    nativeCurrency: {
                      name: 'LAT',
                      symbol: 'LAT',
                      decimals: 18
                    },
                    rpcUrls: [
                      'https://openapi2.platon.network/rpc'
                    ],
                    blockExplorerUrls: [
                      'https://scan.platon.network/'
                    ]
                  }
                ], window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: i
                }).then((function (e) {
                  window.location.reload()
                })).catch((function (e) {
                  return t('User rejected！')
                }))) : 1 == a && '0x33585' == s ? (me = n, e(n)) : (i = [
                  {
                    chainId: '0x33585',
                    chainName: 'PlatON Dev Network',
                    nativeCurrency: {
                      name: 'LAT',
                      symbol: 'LAT',
                      decimals: 18
                    },
                    rpcUrls: [
                      'https://devnetopenapi.platon.network/rpc'
                    ],
                    blockExplorerUrls: [
                      'https://devnetscan.platon.network/'
                    ]
                  }
                ], window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: i
                }).then((function (e) {
                  console.log('wallet_addEthereumChain: ' + e)
                })).catch((function (e) {
                  t('Please connect to MetaMask.')
                })))
              })).catch((function (e) {
                t('Please connect to MetaMask.')
              }))
            } catch (n) {
              t(n)
            }
          }))) : new Promise((function (e, t) {
            t('Not Found Matamask!')
          })) : 2 == e ? new Promise((function (e, n) {
            try {
              localStorage.removeItem('walletconnect'),
              window._platon = {
              };
              var a = {
                210425: 'https://openapi2.platon.network/rpc',
                100: 'https://openapi.platon.network/rpc',
                2203181: 'https://devnetopenapi2.platon.network/rpc',
                210309: 'https://devnetopenapi.platon.network/rpc'
              },
              i = function () {
                var e = window._platon,
                t = e.provider,
                n = e.web3,
                a = t.chainId,
                i = t.accounts;
                return {
                  chainId: a,
                  account: i[0],
                  provider: t,
                  web3: n
                }
              },
              r = function () {
                localStorage.removeItem('walletconnect')
              },
              y = function () {
                var e = Object(s['a']) (regeneratorRuntime.mark((function e() {
                  var t;
                  return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (t = window._platon.provider, t.connected) {
                          e.next = 12;
                          break
                        }
                        return e.prev = 2,
                        e.next = 5,
                        t.enable();
                      case 5:
                        e.next = 12;
                        break;
                      case 7:
                        e.prev = 7,
                        e.t0 = e['catch'](2),
                        console.log('cancel: ', window._platon.provider.wc.clientId),
                        n(e.t0),
                        d(!0);
                      case 12:
                        return e.abrupt('return', t.connected);
                      case 13:
                      case 'end':
                        return e.stop()
                    }
                  }), e, null, [
                    [2,
                    7]
                  ])
                })));
                return function () {
                  return e.apply(this, arguments)
                }
              }(),
              d = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (t || !window._platon.provider) {
                  if (!Object.keys(a).length) return void console.error('chain not found');
                  var n = new u['a']({
                    rpc: a,
                    bridge: 'https://bridge.walletconnect.org',
                    qrcode: !0
                  });
                  n.chainId = 0,
                  n.wc.on('disconnect', (function () {
                    r(),
                    console.log('disconnect: ', n.wc.clientId),
                    n.getWalletConnector = function () {
                      return {
                      }
                    },
                    e(n.wc.clientId === window._platon.provider.wc.clientId),
                    o['a'].replace({
                      path: '/start'
                    })
                  })),
                  window._platon.provider = n
                }
                return window._platon.provider
              };
              d(),
              y().then((function () {
                window.ethereum = window._platon.provider,
                $ = new p.a(window.ethereum),
                X = new $.eth.Contract(l, E),
                Y = new $.eth.Contract(c, B),
                Q = new $.eth.Contract(m, F),
                Z = new $.eth.Contract(T, L),
                ee = new $.eth.Contract(k, R),
                te = new $.eth.Contract(_, K),
                ne = new $.eth.Contract(f, N),
                ie = new $.eth.Contract(b, D),
                me = i().account,
                window.ethereum.selectedAddress = me,
                $.currentProvider.on('accountsChanged', t.handleAccountsChanged),
                $.currentProvider.on('chainChanged', t.handleChainChanged),
                e(me)
              }))
            } catch (h) {
              console.log(h),
              n(h)
            }
          })) : void 0
        },
        getNewId: function (e) {
          try {
            var t,
            n,
            a,
            s = [
            ],
            u = Object(i['a']) (e.logs);
            try {
              for (u.s(); !(a = u.n()).done; ) t = a.value,
              '0x0000000000000000000000000000000000000000000000000000000000000000' == t.topics[1] && s.push(t.topics)
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
            for (var r = [
            ], p = 0, o = s; p < o.length; p++) n = o[p],
            r.push($.utils.hexToNumberString(n[3]));
            return Math.max.apply(null, r) + ''
          } catch (d) {
            return d
          }
        },
        getBalance: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              $.eth.getBalance(ce).then((function (t) {
                e($.utils.fromWei(t))
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getBalanceOfSAET: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Q.methods['balanceOf'].apply(Q.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getEverLightAccount: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['queryAccount'].apply(X.methods, [
                ce
              ]).call().then((function (t) {
                console.log('getEverLightAccount()-----' + JSON.stringify(t)),
                e({
                  creationFlag: t['_creationFlag'],
                  luckyNum: t['_luckyNum']
                })
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getBalanceOfERC721: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Y.methods['balanceOf'].apply(Y.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getTokenIdAndTypeByIndex: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              Y.methods['tokenOfOwnerByIndex'].apply(Y.methods, [
                ce,
                e
              ]).call().then((function (e) {
                X.methods['queryTokenType'].apply(X.methods, [
                  e
                ]).call().then((function (n) {
                  var a = {
                  };
                  a.id = e,
                  a.type = n,
                  t(a)
                })).catch((function (e) {
                  n(e)
                }))
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        queryCharacter: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['queryCharacter'].apply(X.methods, [
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        queryToken: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['queryToken'].apply(X.methods, [
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        takeOff: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = X.methods['takeOff'].apply(X.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        wear: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = X.methods['wear'].apply(X.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        awaitTx: function (e, t, n) {
          var a = 24,
          i = 5000,
          u = t || a,
          r = n || i,
          p = function () {
            var e = Object(s['a']) (regeneratorRuntime.mark((function e(t, n, a) {
              var i,
              s;
              return regeneratorRuntime.wrap((function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (e.prev = 0, i = $.eth.getTransactionReceipt(t), i) {
                      e.next = 6;
                      break
                    }
                    setTimeout((function () {
                      p(t, n, a)
                    }), r),
                    e.next = 15;
                    break;
                  case 6:
                    if (!(u > 0)) {
                      e.next = 14;
                      break
                    }
                    return u -= 1,
                    e.next = 10,
                    i;
                  case 10:
                    s = e.sent,
                    s && s.blockNumber ? n(s) : setTimeout((function () {
                      p(t, n, a)
                    }), r),
                    e.next = 15;
                    break;
                  case 14:
                    a(new Error('checkTxTimeOut'));
                  case 15:
                    e.next = 20;
                    break;
                  case 17:
                    e.prev = 17,
                    e.t0 = e['catch'](0),
                    a(e.t0);
                  case 20:
                  case 'end':
                    return e.stop()
                }
              }), e, null, [
                [0,
                17]
              ])
            })));
            return function (t, n, a) {
              return e.apply(this, arguments)
            }
          }();
          return new Promise((function (t, n) {
            p(e, t, n)
          }))
        },
        stakeTokenIdListSAET: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Q.methods['stakeTokenIdList'].apply(Q.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                console.log('stakeTokenIdList-error：' + JSON.stringify(e)),
                t(e)
              }))
            } catch (n) {
              console.log('stakeTokenIdList-error-2：' + JSON.stringify(n)),
              t(n)
            }
          }))
        },
        stakeTokenIdListELMT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              0 == e ? Z.methods['stakeTokenIdList'].apply(Z.methods, [
                ce
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                console.log('stakeTokenIdListELMT-error1：' + JSON.stringify(e)),
                n(e)
              })) : 1 == e ? ee.methods['stakeTokenIdList'].apply(ee.methods, [
                ce
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                console.log('stakeTokenIdListELMT-error2：' + JSON.stringify(e)),
                n(e)
              })) : 2 == e && t([])
            } catch (a) {
              console.log('stakeTokenIdListELMT-error-2：' + JSON.stringify(a)),
              n(a)
            }
          }))
        },
        stakeStartAtSAET: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              Q.methods['stakeInfo'].apply(Q.methods, [
                ce,
                e
              ]).call().then((function (e) {
                e = JSON.parse(e),
                $.eth.getBlock(e.stakeBn).then((function (e) {
                  t(e.timestamp)
                })).catch((function (e) {
                  n(e)
                }))
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        stakeStartAtELMT: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress,
              0 == e ? Z.methods.stakeInfo(ce, t).call().then((function (e) {
                e = JSON.parse(e),
                $.eth.getBlock(e.stakeBn).then((function (e) {
                  n(e.timestamp)
                })).catch((function (e) {
                  a(e)
                }))
              })).catch((function (e) {
                a(e)
              })) : 1 == e ? ee.methods.stakeInfo(ce, t).call().then((function (e) {
                e = JSON.parse(e),
                $.eth.getBlock(e.stakeBn).then((function (e) {
                  n(e.timestamp)
                })).catch((function (e) {
                  a(e)
                }))
              })).catch((function (e) {
                a(e)
              })) : 2 == e && te.methods.stakeInfo(ce, t).call().then((function (e) {
                e = JSON.parse(e),
                $.eth.getBlock(e.stakeBn).then((function (e) {
                  n(e.timestamp)
                })).catch((function (e) {
                  a(e)
                }))
              })).catch((function (e) {
                a(e)
              }))
            } catch (i) {
              a(i)
            }
          }))
        },
        isApprovedForAllSAET: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Y.methods['isApprovedForAll'].apply(Y.methods, [
                ce,
                F
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        isApprovedForAllELMT: function (e) {
          return new Promise((function (t, n) {
            try {
              var a;
              ce = window.ethereum.selectedAddress,
              0 == e ? a = L : 1 == e ? a = R : 2 == e && (a = K),
              Y.methods['isApprovedForAll'].apply(Y.methods, [
                ce,
                a
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (i) {
              n(i)
            }
          }))
        },
        isApprovedForOrder: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Y.methods['isApprovedForAll'].apply(Y.methods, [
                ce,
                N
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        isApprovedSANFTForOrder: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ae.methods['isApprovedForAll'].apply(ae.methods, [
                ce,
                J
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        setApprovalForAllSAET: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress;
              var n = Y.methods['setApprovalForAll'].apply(Y.methods, [
                F,
                !0
              ]).encodeABI(),
              a = [
                {
                  from: ce,
                  to: B,
                  gas: O,
                  gasPrice: S,
                  data: n
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: a
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (i) {
              t(i)
            }
          }))
        },
        setApprovalForAllELMT: function (e) {
          return new Promise((function (t, n) {
            try {
              var a;
              ce = window.ethereum.selectedAddress,
              0 == e ? a = L : 1 == e ? a = R : 2 == e && (a = K);
              var i = Y.methods['setApprovalForAll'].apply(Y.methods, [
                a,
                !0
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: B,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (u) {
              n(u)
            }
          }))
        },
        stakeSAET: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = Q.methods['stake'].apply(Q.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        stakeELMT: function (e, t) {
          return new Promise((function (n, a) {
            try {
              var i,
              s;
              ce = window.ethereum.selectedAddress,
              0 == e ? (i = Z.methods['stake'].apply(Z.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: L,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]) : 1 == e ? (i = ee.methods['stake'].apply(ee.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: R,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]) : 2 == e && (i = te.methods['stake'].apply(te.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: K,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]),
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        redeemSAET: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = Q.methods['redeem'].apply(Q.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        redeemELMT: function (e, t) {
          return new Promise((function (n, a) {
            try {
              var i,
              s;
              ce = window.ethereum.selectedAddress,
              0 == e ? (i = Z.methods['redeem'].apply(Z.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: L,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]) : 1 == e ? (i = ee.methods['redeem'].apply(ee.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: R,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]) : 2 == e && (i = te.methods['redeem'].apply(te.methods, [
                t
              ]).encodeABI(), s = [
                {
                  from: ce,
                  to: K,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ]),
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        stakeRewardSAET: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              Q.methods['stakeReward'].apply(Q.methods, [
                ce,
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        queryLuckyStonePrice: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['queryLuckyStonePrice'].apply(X.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        allowanceSAET: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              Q.methods['allowance'].apply(Q.methods, [
                ce,
                E
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        allowanceSCGT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ie.methods['allowance'].apply(ie.methods, [
                ce,
                E
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        approveSAETAmount: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = Q.methods['approve'].apply(Q.methods, [
                E,
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        approveSCGTAmount: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ie.methods['approve'].apply(ie.methods, [
                E,
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        approveSAETForOrders: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = Q.methods['approve'].apply(Q.methods, [
                N,
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        setApprovalForAllOrders: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress;
              var n = Y.methods['setApprovalForAll'].apply(Y.methods, [
                N,
                !0
              ]).encodeABI(),
              a = [
                {
                  from: ce,
                  to: B,
                  gas: O,
                  gasPrice: S,
                  data: n
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: a
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (i) {
              t(i)
            }
          }))
        },
        setApprovalSANFTForAllOrders: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress;
              var n = ae.methods['setApprovalForAll'].apply(ae.methods, [
                J,
                !0
              ]).encodeABI(),
              a = [
                {
                  from: ce,
                  to: q,
                  gas: O,
                  gasPrice: S,
                  data: n
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: a
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (i) {
              t(i)
            }
          }))
        },
        buyLuckyStone: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = X.methods['buyLuckyStone'].apply(X.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        useLuckyStone: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = X.methods['useLuckyStone'].apply(X.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        upgradeToken: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = X.methods['upgradeToken'].apply(X.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        mint: function (e) {
          return new Promise((function (t, n) {
            try {
              Te.checkWL().then((function (a) {
                var i = $.utils.toWei('6000');
                a[0] && a[2] > 0 && (i = $.utils.toWei(a[1])),
                ce = window.ethereum.selectedAddress;
                var s = X.methods['mint'].apply(X.methods, [
                  e
                ]).encodeABI(),
                u = [
                  {
                    from: ce,
                    to: E,
                    gas: O,
                    gasPrice: S,
                    value: '0x' + parseInt(i).toString(16),
                    data: s
                  }
                ];
                window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: u
                }).then((function (e) {
                  t(e)
                })).catch((function (e) {
                  n(e)
                }))
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        getBalanceOfELMT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              0 == e ? Z.methods['balanceOf'].apply(Z.methods, [
                ce
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              })) : 1 == e ? ee.methods['balanceOf'].apply(ee.methods, [
                ce
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              })) : 2 == e && te.methods['balanceOf'].apply(te.methods, [
                ce
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        tokenOfOwnerByIndexELMT: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress,
              0 == e ? Z.methods['tokenOfOwnerByIndex'].apply(Z.methods, [
                ce,
                t
              ]).call().then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              })) : 1 == e ? ee.methods['tokenOfOwnerByIndex'].apply(ee.methods, [
                ce,
                t
              ]).call().then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              })) : 2 == e && te.methods['tokenOfOwnerByIndex'].apply(te.methods, [
                ce,
                t
              ]).call().then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (i) {
              a(i)
            }
          }))
        },
        isApprovedForAllEverLight: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              0 == e ? Z.methods['isApprovedForAll'].apply(Z.methods, [
                ce,
                E
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              })) : 1 == e ? ee.methods['isApprovedForAll'].apply(ee.methods, [
                ce,
                E
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              })) : 2 == e && te.methods['isApprovedForAll'].apply(te.methods, [
                ce,
                E
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        setApprovalForAllEverLight: function (e) {
          return new Promise((function (t, n) {
            try {
              var a,
              i;
              ce = window.ethereum.selectedAddress,
              0 == e ? (a = Z.methods['setApprovalForAll'].apply(Z.methods, [
                E,
                !0
              ]).encodeABI(), i = [
                {
                  from: ce,
                  to: L,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ]) : 1 == e ? (a = ee.methods['setApprovalForAll'].apply(ee.methods, [
                E,
                !0
              ]).encodeABI(), i = [
                {
                  from: ce,
                  to: R,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ]) : 2 == e && (a = te.methods['setApprovalForAll'].apply(te.methods, [
                E,
                !0
              ]).encodeABI(), i = [
                {
                  from: ce,
                  to: K,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ]),
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        exchangeToken: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = X.methods['exchangeToken'].apply(X.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        isNameExist: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['isNameExist'].apply(X.methods, [
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        isSuitOwner: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['querySuitOwner'].apply(X.methods, [
                e
              ]).call().then((function (e) {
                e.toUpperCase() == ce.toUpperCase() && t(!0),
                t(!1)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        newTokenType: function (e, t, n) {
          return new Promise((function (a, i) {
            try {
              ce = window.ethereum.selectedAddress;
              var s = X.methods['newTokenType'].apply(X.methods, [
                parseInt(e),
                t,
                parseInt(n)
              ]).encodeABI(),
              u = [
                {
                  from: ce,
                  to: E,
                  gas: O,
                  gasPrice: S,
                  data: s
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: u
              }).then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              }))
            } catch (r) {
              i(r)
            }
          }))
        },
        transferFrom: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = Y.methods['transferFrom'].apply(Y.methods, [
                ce,
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: B,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                console.log(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        queryOrderInfo: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              ne.methods['queryOrderInfo'].apply(ne.methods, [
                ce,
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        buyOrder: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = ne.methods['buyOrder'].apply(ne.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: N,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                console.log('buy:' + e),
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        buySANFTOrder: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ye.methods['buy'].apply(ye.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: J,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                console.log('buy:' + e),
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        sellOrder: function (e, t, n) {
          return new Promise((function (a, i) {
            try {
              ce = window.ethereum.selectedAddress;
              var s = ne.methods['sellOrder'].apply(ne.methods, [
                e,
                t,
                n
              ]).encodeABI(),
              u = [
                {
                  from: ce,
                  to: N,
                  gas: O,
                  gasPrice: S,
                  data: s
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: u
              }).then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              }))
            } catch (r) {
              i(r)
            }
          }))
        },
        sellSANFTOrder: function (e, t) {
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = ye.methods['sell'].apply(ye.methods, [
                e,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: J,
                  gas: O,
                  gasPrice: S,
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        queryOrderTabList: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ne.methods['queryOrderTabList'].apply(ne.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        queryStoreOrderList: function (e, t, n) {
          return new Promise((function (a, i) {
            try {
              ce = window.ethereum.selectedAddress,
              1 == e ? ye.methods['queryOrderList'].apply(ye.methods, [
              ]).call().then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              })) : ne.methods['queryStoreOrderList'].apply(ne.methods, [
                e,
                t,
                n
              ]).call().then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              }))
            } catch (s) {
              i(s)
            }
          }))
        },
        queryOwnerOrderList: function (e, t, n) {
          return new Promise((function (a, i) {
            try {
              ce = window.ethereum.selectedAddress,
              1 == e ? ye.methods['queryOwnerOrderList'].apply(ye.methods, [
              ]).call({
                from: ce
              }).then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              })) : ne.methods['queryOwnerOrderList'].apply(ne.methods, [
                ce,
                e,
                t,
                n
              ]).call().then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              }))
            } catch (s) {
              i(s)
            }
          }))
        },
        cancelOrder: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ne.methods['cancelOrder'].apply(ne.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: N,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        cancelSANFTOrder: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ye.methods['cancel'].apply(ye.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: J,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        getBalanceOfSANFT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              console.log('address:' + ce),
              ae.methods['balanceOf'].apply(Q.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        tokenURIOfSANFT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              ae.methods['tokenURI'].apply(ae.methods, [
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        saIPFS: function (e) {
          return new Promise((function (t, n) {
            try {
              d.a.get(e, {
                params: {
                }
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        todayAirdropInfo: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/todayAirdropInfo?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        yesterdayAirdropInfo: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/yesterdayAirdropInfo?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        participateAirdrop: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/participateAirdrop?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        addMintLog: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/mint-log/add?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        addAccess: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/access-log/add?address=' + ce + '&accessUrl=' + e, {
                params: {
                }
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        toWeekAirdropInfo: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/stakeInfo?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        yesterWeekAirdropInfo: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              d.a.get('https://test.app.limclct.com/sa-api/lastStakeInfo?address=' + ce, {
                params: {
                }
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        saIPFSExp: function (e) {
          return new Promise((function (t, n) {
            try {
              d.a.get('https://test.app.limclct.com/sa-api/sanftPower?tokenId=' + e, {
                params: {
                }
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        tokenOfOwnerByIndexSANFT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              ae.methods['tokenOfOwnerByIndex'].apply(Z.methods, [
                ce,
                e
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (a) {
              n(a)
            }
          }))
        },
        saNFTList: function () {
          var e = this;
          return Object(s['a']) (regeneratorRuntime.mark((function t() {
            var n,
            a,
            i,
            s,
            u,
            r,
            p,
            o;
            return regeneratorRuntime.wrap((function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = [
                  ],
                  a = [
                  ],
                  t.next = 4,
                  e.getBalanceOfSANFT();
                case 4:
                  i = t.sent,
                  s = 0;
                case 6:
                  if (!(s < i)) {
                    t.next = 28;
                    break
                  }
                  return t.next = 9,
                  e.tokenOfOwnerByIndexSANFT(s);
                case 9:
                  return u = t.sent,
                  a.push(Number(u)),
                  t.next = 13,
                  e.saIPFSExp(u);
                case 13:
                  return r = t.sent,
                  console.log('saIPFSExp:' + JSON.stringify(r)),
                  t.next = 17,
                  e.tokenURIOfSANFT(u);
                case 17:
                  return p = t.sent,
                  t.next = 20,
                  e.saIPFS(p);
                case 20:
                  o = t.sent,
                  o.data.tokenId = Number(u),
                  o.data._power = r.data.data.power,
                  o.data._rare = r.data.data.rare,
                  n.push(o.data);
                case 25:
                  s++,
                  t.next = 6;
                  break;
                case 28:
                  return e.roleImgObjList = n,
                  t.abrupt('return', n);
                case 30:
                case 'end':
                  return t.stop()
              }
            }), t)
          }))) ()
        },
        approveSCGTForOrders: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ie.methods['approve'].apply(ie.methods, [
                N,
                (e + '000000000000000000').toString()
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: D,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        approveSCGTForSANFTOrders: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ie.methods['approve'].apply(ie.methods, [
                J,
                (e + '000000000000000000').toString()
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: D,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        latToSCGT: function (e) {
          var t = (new Date).getTime() + 180000;
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = se.methods['swapExactETHForTokens'].apply(se.methods, [
                0,
                [
                  U,
                  D
                ],
                ce,
                t
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: W,
                  gas: O,
                  gasPrice: S,
                  value: parseInt(e * Math.pow(10, 18)).toString(16),
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (u) {
              a(u)
            }
          }))
        },
        approveSCGTForRouter: function (e) {
          return console.log('amount：' + e),
          new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ie.methods['approve'].apply(ie.methods, [
                W,
                $.utils.toWei(e).toString()
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: D,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                console.log(e),
                t(e)
              })).catch((function (e) {
                console.log(e),
                n(e)
              }))
            } catch (s) {
              console.log(s),
              n(s)
            }
          }))
        },
        SCGTToLat: function (e) {
          var t = (new Date).getTime() + 1200000;
          return new Promise((function (n, a) {
            try {
              ce = window.ethereum.selectedAddress;
              var i = $.utils.toWei(e),
              s = se.methods['swapExactTokensForETH'].apply(se.methods, [
                i,
                0,
                [
                  D,
                  U
                ],
                ce,
                t
              ]).encodeABI(),
              u = [
                {
                  from: ce,
                  to: W,
                  gas: O,
                  gasPrice: S,
                  data: s
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: u
              }).then((function (e) {
                n(e)
              })).catch((function (e) {
                a(e)
              }))
            } catch (r) {
              a(r)
            }
          }))
        },
        getPair: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ue.methods['getPair'].apply(ue.methods, [
                U,
                D
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getReserves: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = new $.eth.Contract(g, e);
              a.methods['getReserves'].apply(a.methods, [
              ]).call().then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (i) {
              n(i)
            }
          }))
        },
        getAmountOut: function (e, t, n) {
          return new Promise((function (a, i) {
            try {
              ce = window.ethereum.selectedAddress,
              se.methods['getAmountOut'].apply(se.methods, [
                e,
                t,
                n
              ]).call().then((function (e) {
                a(e)
              })).catch((function (e) {
                i(e)
              }))
            } catch (s) {
              i(s)
            }
          }))
        },
        getAmountOutLAT: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark((function e(t) {
            var n,
            i,
            s,
            u,
            r,
            p,
            o,
            y,
            d;
            return regeneratorRuntime.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Te.getPair(U, D);
                case 2:
                  return n = e.sent,
                  e.next = 5,
                  Te.getReserves(n);
                case 5:
                  return i = e.sent,
                  s = i._reserve0,
                  u = i._reserve1,
                  r = $.utils.toBN(U).lt(D) ? [
                    s,
                    u
                  ] : [
                    u,
                    s
                  ],
                  p = Object(a['a']) (r, 2),
                  o = p[0],
                  y = p[1],
                  e.next = 11,
                  Te.getAmountOut((t * Math.pow(10, 18)).toLocaleString().replaceAll(',', ''), o, y);
                case 11:
                  return d = e.sent,
                  d /= Math.pow(10, 18),
                  console.log(d),
                  e.abrupt('return', d);
                case 15:
                case 'end':
                  return e.stop()
              }
            }), e)
          })));
          function t(t) {
            return e.apply(this, arguments)
          }
          return t
        }(),
        getAmountOutSCGT: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark((function e(t) {
            var n,
            i,
            s,
            u,
            r,
            p,
            o,
            y,
            d;
            return regeneratorRuntime.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Te.getPair(U, D);
                case 2:
                  return n = e.sent,
                  e.next = 5,
                  Te.getReserves(n);
                case 5:
                  return i = e.sent,
                  s = i._reserve0,
                  u = i._reserve1,
                  r = $.utils.toBN(U).lt(D) ? [
                    s,
                    u
                  ] : [
                    u,
                    s
                  ],
                  p = Object(a['a']) (r, 2),
                  o = p[0],
                  y = p[1],
                  e.next = 11,
                  Te.getAmountOut((t * Math.pow(10, 18)).toString(), y, o);
                case 11:
                  return d = e.sent,
                  d /= Math.pow(10, 18),
                  console.log(d),
                  e.abrupt('return', d);
                case 15:
                case 'end':
                  return e.stop()
              }
            }), e)
          })));
          function t(t) {
            return e.apply(this, arguments)
          }
          return t
        }(),
        allowanceSCGT2LAT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ie.methods['allowance'].apply(ie.methods, [
                ce,
                W
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getBalnceOfLat: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              $.eth.getBalance(ce).then((function (t) {
                e($.utils.fromWei(t))
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        sellTokenInfo: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = Q.methods['sellTokenInfo'].apply(Q.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: F,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        checkWL: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              X.methods['checkWL'].apply(X.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        approveHashBoxAmount: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = ie.methods['approve'].apply(ie.methods, [
                H,
                $.utils.toWei(e.toString())
              ]).encodeABI(),
              i = {
                from: ce,
                to: D,
                data: a
              },
              s = [
              ];
              $.eth.estimateGas(i).then((function (e) {
                i.gas = $.utils.toHex(parseInt(e)),
                i.gasPrice = S,
                s.push(i),
                console.log(s),
                window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: s
                }).then((function (e) {
                  t(e)
                })).catch((function (e) {
                  n(e)
                }))
              }))
            } catch (u) {
              n(u)
            }
          }))
        },
        betting: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = pe.methods['betting'].apply(pe.methods, [
                $.utils.toWei(e.toString())
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: H,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        allowanceBIOForHASHBOX: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ie.methods['allowance'].apply(ie.methods, [
                ce,
                H
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        queryBettingInfoListForHASHBOX: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              pe.methods['queryBettingInfoList'].apply(pe.methods, [
              ]).call({
                from: ce
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        queryAllBettingInfoListForHASHBOX: function () {
          return new Promise((function (e, t) {
            try {
              pe.methods['queryAllBettingInfoList'].apply(pe.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getBalanceOfSCGT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ie.methods['balanceOf'].apply(ie.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        getBalnceOfLAT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              $.eth.getBalance(ce).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        approveHashBoxAmountLAT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = oe.methods['approve'].apply(oe.methods, [
                j,
                $.utils.toWei(e.toString())
              ]).encodeABI(),
              i = {
                from: ce,
                to: U,
                data: a
              },
              s = [
              ];
              $.eth.estimateGas(i).then((function (e) {
                i.gas = $.utils.toHex(parseInt(e)),
                i.gasPrice = S,
                s.push(i),
                console.log(s),
                window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: s
                }).then((function (e) {
                  t(e)
                })).catch((function (e) {
                  n(e)
                }))
              }))
            } catch (u) {
              n(u)
            }
          }))
        },
        bettingLAT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = $.utils.toWei(e.toString()),
              i = re.methods['betting'].apply(re.methods, [
                $.utils.toWei(e.toString())
              ]).encodeABI(),
              s = [
                {
                  from: ce,
                  to: j,
                  gasPrice: S,
                  value: '0x' + parseInt(a).toString(16),
                  data: i
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: s
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (u) {
              n(u)
            }
          }))
        },
        hashgameLatContractIsActive: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              re.methods['isActive'].apply(re.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        hashgameScgtContractIsActive: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              pe.methods['isActive'].apply(pe.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        allowanceLATForHASHBOX: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              oe.methods['allowance'].apply(oe.methods, [
                ce,
                j
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        queryBettingInfoListForHASHBOXLAT: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              re.methods['queryBettingInfoList'].apply(re.methods, [
              ]).call({
                from: ce
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        queryAllBettingInfoListForHASHBOXLAT: function () {
          return new Promise((function (e, t) {
            try {
              re.methods['queryAllBettingInfoList'].apply(re.methods, [
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        isApprovedForAllRecovery: function () {
          return new Promise((function (e, t) {
            try {
              Y.methods['isApprovedForAll'].apply(Y.methods, [
                window.ethereum.selectedAddress,
                V
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        setApprovalForAllRecovery: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress;
              var n = Y.methods['setApprovalForAll'].apply(Y.methods, [
                V,
                !0
              ]).encodeABI(),
              a = [
                {
                  from: ce,
                  to: B,
                  gasPrice: S,
                  data: n
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: a
              }).then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (i) {
              t(i)
            }
          }))
        },
        recovery: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress;
              var a = de.methods['recovery'].apply(de.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: V,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        allowanceSCGTForStake: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              ie.methods['allowance'].apply(ie.methods, [
                ce,
                z
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        approveSCGTForStake: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              e = $.utils.toWei(e.toString());
              var a = ie.methods['approve'].apply(ie.methods, [
                z,
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: D,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        stakeSCGT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              e = $.utils.toWei(e.toString());
              var a = le.methods['stake'].apply(le.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: z,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        redeemSCGT: function (e) {
          return new Promise((function (t, n) {
            try {
              ce = window.ethereum.selectedAddress,
              e = $.utils.toWei(e.toString());
              var a = le.methods['redeem'].apply(le.methods, [
                e
              ]).encodeABI(),
              i = [
                {
                  from: ce,
                  to: z,
                  gas: O,
                  gasPrice: S,
                  data: a
                }
              ];
              window.ethereum.request({
                method: 'eth_sendTransaction',
                params: i
              }).then((function (e) {
                t(e)
              })).catch((function (e) {
                n(e)
              }))
            } catch (s) {
              n(s)
            }
          }))
        },
        querySCGTStakeInfo: function () {
          return new Promise((function (e, t) {
            try {
              ce = window.ethereum.selectedAddress,
              le.methods['queryStakeInfo'].apply(le.methods, [
                ce
              ]).call().then((function (t) {
                e(t)
              })).catch((function (e) {
                t(e)
              }))
            } catch (n) {
              t(n)
            }
          }))
        },
        web3js: $
      };
      t['a'] = Te
    },
    5: function (e, t) {
    },
    '56d7': function (e, t, n) {
      'use strict';
      n.r(t);
      n('e260'),
      n('e6cf'),
      n('cca6'),
      n('a79d'),
      n('ac1f'),
      n('00b4'),
      n('5319'),
      n('4d63'),
      n('c607'),
      n('2c3e'),
      n('25f0');
      var a = n('2b0e'),
      i = function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', {
          attrs: {
            id: 'app'
          }
        }, [
          n('router-view')
        ], 1)
      },
      s = [
      ],
      u = {
        name: 'app'
      },
      r = u,
      p = (n('7c55'), n('2877')),
      o = Object(p['a']) (r, i, s, !1, null, null, null),
      y = o.exports,
      d = n('a18c'),
      l = n('bc3a'),
      c = n.n(l),
      m = n('4c97'),
      T = n('2f62'),
      f = n('4360'),
      h = n('2af0'),
      b = n.n(h),
      w = n('b311'),
      v = n.n(w),
      g = n('565f'),
      A = n('5596'),
      M = n('2bb1'),
      I = n('343b'),
      k = n('5e46'),
      _ = n('0b33'),
      x = n('e41f'),
      P = n('d314'),
      O = n('2d6d'),
      S = n('20fb'),
      C = n('d399'),
      E = n('b650'),
      B = n('543e');
      n('fdc4'),
      n('4149'),
      n('598e'),
      n('065c'),
      n('f9b3'),
      n('160b'),
      n('b4eb'),
      n('339f'),
      n('b931'),
      n('c2d8'),
      n('0147'),
      n('3394'),
      n('5d91'),
      n('98b9'),
      n('8e66'),
      n('a3af');
      n('3a34'),
      a['a'].use(g['a']),
      a['a'].use(T['a']),
      a['a'].use(A['a']),
      a['a'].use(M['a']),
      a['a'].use(I['a']),
      a['a'].use(k['a']),
      a['a'].use(_['a']),
      a['a'].use(x['a']),
      a['a'].use(P['a']),
      a['a'].use(O['a']),
      a['a'].use(S['a']),
      a['a'].use(C['a']),
      a['a'].use(E['a']),
      a['a'].use(B['a']),
      a['a'].use(b.a),
      a['a'].prototype.$axios = c.a,
      a['a'].prototype.$EL = m['a'],
      a['a'].prototype.$toast = C['a'],
      a['a'].config.productionTip = !1,
      a['a'].prototype.Clipboard = v.a,
      new a['a']({
        router: d['a'],
        render: function (e) {
          return e(y)
        },
        store: f['a']
      }).$mount('#app'),
      Date.prototype.format = function (e) {
        var t = {
          'M+': this.getMonth() + 1,
          'd+': this.getDate(),
          'h+': this.getHours(),
          'm+': this.getMinutes(),
          's+': this.getSeconds(),
          'w+': this.getDay(),
          'q+': Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))), t) new RegExp('(' + n + ')').test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : ('00' + t[n]).substr(('' + t[n]).length)));
        return e
      }
    },
    '5d91': function (e, t, n) {
    },
    6: function (e, t) {
    },
    7: function (e, t) {
    },
    '7c55': function (e, t, n) {
      'use strict';
      n('2395')
    },
    8: function (e, t) {
    },
    '8e66': function (e, t, n) {
    },
    9: function (e, t) {
    },
    '98b9': function (e, t, n) {
    },
    a18c: function (e, t, n) {
      'use strict';
      n('d3b7'),
      n('3ca3'),
      n('ddb0'),
      n('ac1f');
      var a = n('2b0e'),
      i = n('8c4f'),
      s = n('4360'),
      u = n('4c97');
      a['a'].use(i['a']);
      var r = new i['a']({
        mode: 'hash',
        routes: [
          {
            path: '/',
            redirect: '/start'
          },
          {
            path: '/start',
            name: 'start',
            component: function () {
              return n.e('chunk-0904f29d').then(n.bind(null, '4587'))
            }
          },
          {
            path: '/home',
            name: 'home',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-7411518b'),
              n.e('chunk-1425a14a')]).then(n.bind(null, '6511'))
            }
          },
          {
            path: '/enter',
            name: 'enter',
            component: function () {
              return n.e('chunk-3cf443bb').then(n.bind(null, 'fbe9'))
            }
          },
          {
            path: '/newRole',
            name: 'newRole',
            component: function () {
              return n.e('chunk-7bf51e22').then(n.bind(null, '7400'))
            }
          },
          {
            path: '/roleList',
            name: 'roleList',
            component: function () {
              return n.e('chunk-173c9c1c').then(n.bind(null, '9d83'))
            }
          },
          {
            path: '/box',
            name: 'box',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-4108a3da'),
              n.e('chunk-c0be7358')]).then(n.bind(null, 'e364'))
            }
          },
          {
            path: '/mining',
            name: 'mining',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-0e5f709b')]).then(n.bind(null, '822f'))
            }
          },
          {
            path: '/upgrade/:upgradeType?',
            name: 'upgrade',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-7411518b'),
              n.e('chunk-5d41f9cc')]).then(n.bind(null, 'd5a9'))
            }
          },
          {
            path: '/upgradeChange',
            name: 'upgradeChange',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-6745df69')]).then(n.bind(null, '9d7e'))
            }
          },
          {
            path: '/market',
            name: 'market',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-7411518b'),
              n.e('chunk-4108a3da'),
              n.e('chunk-dd6bcf56')]).then(n.bind(null, '658d'))
            }
          },
          {
            path: '/hashgame',
            name: 'hashgame',
            component: function () {
              return Promise.all([n.e('chunk-21a8cfc2'),
              n.e('chunk-7411518b'),
              n.e('chunk-51e1d042')]).then(n.bind(null, 'a7c2'))
            }
          }
        ]
      });
      r.afterEach((function (e, t) {
        '/start' !== e.path && (u['a'].addAccess(e.path), s['a'].state.address ? s['a'].state.ROLE_ID : r.push({
          path: '/start'
        }), localStorage.setItem('foot_tab', e.path))
      }));
      var p = i['a'].prototype.push,
      o = i['a'].prototype.replace;
      i['a'].prototype.push = function (e, t, n) {
        return t || n ? p.call(this, e, t, n) : p.call(this, e).catch((function (e) {
          return e
        }))
      },
      i['a'].prototype.replace = function (e, t, n) {
        return t || n ? o.call(this, e, t, n) : o.call(this, e).catch((function (e) {
          return e
        }))
      },
      t['a'] = r
    },
    a3af: function (e, t) {
      var n = document.documentElement,
      a = 'onorientationchange' in window ? 'orientationchange' : 'resize',
      i = function () {
        var e = n.clientWidth;
        e > 750 ? n.style.fontSize = '100px' : e && (n.style.fontSize = e / 750 * 100 + 'px')
      };
      window.addEventListener(a, i, !1),
      document.addEventListener('DOMContentLoaded', i, !1),
      window.onresize = function () {
        i()
      }
    }
  });
  