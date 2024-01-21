const germanRules = [
    {
        key: 1,
        primary: 'A',
        sub: 'a/aa/ah',
        poss: 'Possibilities: #[ɑ]#, #[a]#',
        rules: [
            {
                key: 1,
                cond: '@a@ + single consonant',
                pron: '#[ɑ]#'
            }, {
                key: 2,
                cond: '@a@ + single consonant within a prefix or single syllable word',
                pron: '#[a]#'
            }, {
                key: 3,
                cond: '@a@ + double consonant or multiple consonants within the same syllable',
                pron: '#[a]#'
            }, {
                key: 4,
                cond: '@aa@ or @ah@',
                pron: '#[ɑ]#'
            }
        ]
    }, {
        key: 2,
        primary: 'A',
        sub: 'ai/ay',
        poss: 'Possibilities: #[aɪ]#',
        rules: [
            {
                key: 1,
                cond: '@ai@/@ay@',
                pron: '#[aɪ]#'
            }
        ]
    }, {
        key: 3,
        primary: 'A',
        sub: 'au/äu',
        poss: 'Possibilities: #[ɑʊ]#, #[ɔʏ]#',
        rules: [
            {
                key: 1,
                cond: '@au@',
                pron: '#[ɑʊ]#'
            }, {
                key: 2,
                cond: '@äu@',
                pron: '#[ɔʏ]#'
            }
        ]
    }, {
        key: 4,
        primary: 'A',
        sub: 'ä/äh',
        poss: 'Possibilities: #[ɛː]#, #[ɛ]#',
        rules: [
            {
                key: 1,
                cond: '@ä@/@äh@ + single consonant',
                pron: '#[ɛː]#'
            }, {
                key: 2,
                cond: '@ä@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ɛ]#'
            }
        ]
    }, {
        key: 5,
        primary: 'B',
        sub: null,
        poss: 'Possibilities: #[b]#, #[p]#',
        rules: [
            {
                key: 1,
                cond: '@b@ when initial in word/syllable',
                pron: '#[b]#'
            }, {
                key: 2,
                cond: '@b@/@bt@/@bst@ when final in a word/syllable',
                pron: '#[p]#'
            }
        ]
    }, {
        key: 6,
        primary: 'C',
        sub: 'c/ck',
        poss: 'Possibilities: #[k]#, #[ts]#, #[tʃ]#, #[s]#',
        rules: [
            {
                key: 1,
                cond: '@c@ + @a@, @o@, @u@, or a consonant (EXCEPT @h@)',
                pron: '#[k]#'
            }, {
                key: 2,
                cond: '@c@ + @e@, @i@, @ä@, @ö@, or @ü@ in words of Latin origin',
                pron: '#[ts]#'
            }, {
                key: 3,
                cond: '@c@ + @e@ or @i@ in words of Italian origin',
                pron: '#[tʃ]#'
            }, {
                key: 4,
                cond: '@c@ in some words of French origin',
                pron: '#[s]#'
            }
        ]
    }, {
        key: 7,
        primary: 'C',
        sub: 'ch/chs',
        poss: 'Possibilities: #[ç]#, #[x]#, #[k]#, #[ʃ]#, #[ks]#',
        rules: [
            {
                key: 1,
                cond: '@ch@ preceded by @i@, @e@, @ä@, @ö@, @ü@, @äu@, @eu@, @ai@, @ei@, or a consonant',
                pron: '#[ç]#'
            }, {
                key: 2,
                cond: '@ch@ preceded by @a@, @o@, @u@, or @au@',
                pron: '#[x]#'
            }, {
                key: 3,
                cond: '@ch@ in words of Greek origin',
                pron: '#[k]#'
            }, {
                key: 4,
                cond: '@ch@ in words of French origin',
                pron: '#[ʃ]#'
            }, {
                key: 5,
                cond: '@chs@ within word root',
                pron: '#[ks]# - Note: when @s@ is added to @ch@ as part of a suffix or as the beginning of a compound word part, the @ch@ remains #[ç]#/#[x]# according to the rules above.'
            }
        ]
    }, {
        key: 8,
        primary: 'D',
        sub: null,
        poss: 'Possibilities: #[d]#, #[t]#',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @d@',
                pron: '#[d]#'
            }, {
                key: 2,
                cond: '@d@@dt@/@dst when final in word/syllable',
                pron: '#[t]#'
            }
        ]
    }, {
        key: 9,
        primary: 'E',
        sub: 'e/ee/eh',
        poss: 'Possibilities: #[e]#, #[ɛ]#, #[ə]#',
        rules: [
            {
                key: 1,
                cond: '@e@ + single consonant',
                pron: '#[e]# (see exceptions below)'
            }, {
                key: 2,
                cond: '@e@ in single-syllable word or @er-@/@her-@/@zer-@ prefix',
                pron: '#[ɛ]#'
            }, {
                key: 3,
                cond: '@e@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ɛ]#'
            }, {
                key: 4,
                cond: '@e@ in final unstressed syllable, or in @ge-@/@be-@ prefix',
                pron: '#[ə]#'
            }, {
                key: 5,
                cond: '@ee@ or @eh@',
                pron: '#[e]#'
            }
        ]
    }, {
        key: 10,
        primary: 'E',
        sub: 'ei/ey/eu',
        poss: 'Possibilities: #[aɪ]#, #[ɔʏ]#',
        rules: [
            {
                key: 1,
                cond: '@ei@/@ey@',
                pron: '#[aɪ]#'
            }, {
                key: 2,
                cond: '@eu@',
                pron: '#[ɔʏ]#'
            }
        ]
    }, {
        key: 11,
        primary: 'F',
        sub: null,
        poss: 'Possibilities: #[f]#',
        rules: [
            {
                key: 1,
                cond: '@f@/@ff@',
                pron: '#[f]#'
            }
        ]
    }, {
        key: 12,
        primary: 'G',
        sub: null,
        poss: 'Possibilities: #[g]#, #[k]#, #[ç]#',
        rules: [
            {
                key: 1,
                cond: '@g@ when initial in word/syllable',
                pron: '#[g]#'
            }, {
                key: 2,
                cond: '@g@/@gd@/@gt@/@gst@ when final in word/syllable',
                pron: '#[k]#'
            }, {
                key: 3,
                cond: '@ig@ when final in a word/syllable',
                pron: 'Combination = #[ɪç]# (see exception below)'
            }, {
                key: 4,
                cond: 'Word ending in @ig@ + suffix @-lich@/@-reich@',
                pron: 'Combination = #[ɪk]#'
            }
        ]
    }, {
        key: 13,
        primary: 'H',
        sub: null,
        poss: 'Possibilities: #[h]#, silent',
        rules: [
            {
                key: 1,
                cond: '@h@ when initial in word/syllable',
                pron: '#[h]#'
            }, {
                key: 2,
                cond: 'All other cases',
                pron: 'Silent - Note: closes preceding vowel'
            }
        ]
    }, {
        key: 14,
        primary: 'I',
        sub: null,
        poss: 'Possibilities: #[i]#, #[ɪ]#, #[j]#',
        rules: [
            {
                key: 1,
                cond: '@i@ + single consonant',
                pron: '#[i]#'
            }, {
                key: 2,
                cond: '@i@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ɪ]#'
            }, {
                key: 3,
                cond: '@ie@/@ih@/@ieh@',
                pron: '#[i]#'
            }, {
                key: 4,
                cond: 'Some words of foreign origin ending in @-ie@/@-ier@/@-ient@',
                pron: '#[j]#'
            }
        ]
    }, {
        key: 15,
        primary: 'J',
        sub: null,
        poss: 'Possibilities: #[j]#, #[ʒ]#',
        rules: [
            {
                key: 1,
                cond: '@j@',
                pron: 'Usually #[j]#'
            }, {
                key: 2,
                cond: '@j@ in some words of French origin',
                pron: '#[ʒ]#'
            }
        ]
    }, {
        key: 16,
        primary: 'K',
        sub: null,
        poss: 'Possibilities: #[k]#',
        rules: [
            {
                key: 1,
                cond: '@k@',
                pron: '#[k]#'
            }
        ]
    }, {
        key: 17,
        primary: 'L',
        sub: null,
        poss: 'Possibilities: #[l]#',
        rules: [
            {
                key: 1,
                cond: '@l@/@ll@',
                pron: '#[l]#'
            }
        ]
    }, {
        key: 18,
        primary: 'M',
        sub: null,
        poss: 'Possibilities: #[m]#',
        rules: [
            {
                key: 1,
                cond: '@m@',
                pron: '#[m]#'
            }
        ]
    }, {
        key: 19,
        primary: 'N',
        sub: 'n/nn',
        poss: 'Possibilities: #[n]#',
        rules: [
            {
                key: 1,
                cond: '@n@/@nn@',
                pron: '#[n]#'
            }
        ]
    }, {
        key: 20,
        primary: 'N',
        sub: 'ng/nk',
        poss: 'Possibilities: #[ŋ]#, #[ng]#, #[ŋk]#, #[nk]#',
        rules: [
            {
                key: 1,
                cond: '@ng@ when part of the same syllable',
                pron: '#[ŋ]# - NO hard #[g]#'
            }, {
                key: 2,
                cond: '@ng@ when in separate syllables',
                pron: '#[ng]#'
            }, {
                key: 3,
                cond: '@nk when part of the same syllable',
                pron: '#[ŋk]#'
            }, {
                key: 4,
                cond: '@nk@ when in separate syllables',
                pron: '#[nk]#'
            }
        ]
    }, {
        key: 21,
        primary: 'O',
        sub: 'o/oo/oh',
        poss: 'Possibilities: #[o]#, #[ɔ]#',
        rules: [
            {
                key: 1,
                cond: '@o@ + single consonant',
                pron: '#[o]#'
            }, {
                key: 2,
                cond: '@o@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ɔ]#'
            }, {
                key: 3,
                cond: '@oo@ or @oh@',
                pron: 'Always #[o]#'
            }
        ]
    }, {
        key: 22,
        primary: 'O',
        sub: 'ö/öh/oe',
        poss: 'Possibilities: #[ø]#, #[œ]#',
        rules: [
            {
                key: 1,
                cond: '@ö@/@oe@ + single consonant',
                pron: '#[ø]#'
            }, {
                key: 2,
                cond: '@ö@/@oe@ + double consonant or multiple consonants within the same syllable',
                pron: '#[œ]#'
            }, {
                key: 3,
                cond: '@öh@',
                pron: 'Always #[ø]#'
            }
        ]
    }, {
        key: 23,
        primary: 'P',
        sub: null,
        poss: 'Possibilities: #[p]#, #[f]#',
        rules: [
            {
                key: 1,
                cond: '@p@',
                pron: '#[p]#'
            }, {
                key: 2,
                cond: '@ph@ in words of Greek origin',
                pron: '#[f]#'
            }
        ]
    }, {
        key: 24,
        primary: 'Q',
        sub: null,
        poss: 'Possibilities: #[kv]#',
        rules: [
            {
                key: 1,
                cond: 'Always in combination @qu@',
                pron: 'Combination = #[kv]#'
            }
        ]
    }, {
        key: 25,
        primary: 'R',
        sub: null,
        poss: 'Possibilities: #[r]#, #[ɐ]#',
        rules: [
            {
                key: 1,
                cond: '@r@',
                pron: '#[r]# - Note: should never be an American @r@. Use flipped @r@ in singing.'
            }, {
                key: 2,
                cond: 'Final @-er@ or @r@ + another consonant, esp. at fast tempos',
                pron: 'Can choose #[ɐ]# instead of flipped @r@'
            }
        ]
    }, {
        key: 26,
        primary: 'S',
        sub: 's/ss/ß',
        poss: 'Possibilities: #[s]#, #[z]#',
        rules: [
            {
                key: 1,
                cond: 'Final @s@',
                pron: '#[s]#'
            }, {
                key: 2,
                cond: 'Initial or intervocalic @s@',
                pron: '#[z]#'
            }, {
                key: 3,
                cond: '@ss@, or @ß@',
                pron: '#[s]#'
            }
        ]
    }, {
        key: 27,
        primary: 'S',
        sub: 'sch',
        poss: 'Possibilities: #[ʃ]#, #[tʃ]#',
        rules: [
            {
                key: 1,
                cond: '@sch@ (not preceded by @t@)',
                pron: '#[ʃ]#'
            }, {
                key: 2,
                cond: '@tsch@ within the same syllable',
                pron: '#[tʃ]#'
            }
        ]
    }, {
        key: 28,
        primary: 'S',
        sub: 'sp/st',
        poss: 'Possibilities: #[ʃp]#, #[ʃt]#, #[sp]#, #[st]#',
        rules: [
            {
                key: 1,
                cond: '@sp@/@st@ when initial in word/syllable',
                pron: '#[ʃp]#/#[ʃt]#'
            }, {
                key: 2,
                cond: '@sp@/@st@ in all other cases',
                pron: '#[sp]#/#[st]#'
            }
        ]
    }, {
        key: 29,
        primary: 'T',
        sub: 't/tt/th',
        poss: 'Possibilities: #[t]#, #[tsj]#',
        rules: [
            {
                key: 1,
                cond: '@t@/@tt@/@th@',
                pron: '#[t]#'
            }, {
                key: 2,
                cond: '@ti@ within suffixes @-tion@ and @-tient@',
                pron: '#[tsj]#'
            }
        ]
    }, {
        key: 30,
        primary: 'T',
        sub: 'tsch/tz',
        poss: 'Possibilities: #[tʃ]#, #[ts]#',
        rules: [
            {
                key: 1,
                cond: '@tsch@ within the same syllable',
                pron: '#[tʃ]#'
            }, {
                key: 2,
                cond: '@tz@ within the same syllable',
                pron: '#[ts]#'
            }
        ]
    }, {
        key: 31,
        primary: 'U',
        sub: 'u/uh',
        poss: 'Possibilities: #[u]#, #[ʊ]#',
        rules: [
            {
                key: 1,
                cond: '@u@/@uh@ + single consonant',
                pron: '#[u]# - see exceptions below'
            }, {
                key: 2,
                cond: '@u@ in @um@, @zum@, or prefix @um-@/@un-@',
                pron: '#[ʊ]#'
            }, {
                key: 3,
                cond: '@u@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ʊ]#'
            }
        ]
    }, {
        key: 32,
        primary: 'U',
        sub: 'ü/üh/ue',
        poss: 'Possibilities: #[y]#, #[ʏ]#',
        rules: [
            {
                key: 1,
                cond: '@ü@/@üh@/@ue@ + single consonant',
                pron: '#[y]#'
            }, {
                key: 2,
                cond: '@ü@/@üh@/@ue@ + double consonant or multiple consonants within the same syllable',
                pron: '#[ʏ]#'
            }
        ]
    }, {
        key: 33,
        primary: 'V',
        sub: null,
        poss: 'Possibilities: #[f]#, #[v]#',
        rules: [
            {
                key: 1,
                cond: '@v@',
                pron: 'Usually #[f]#'
            }, {
                key: 2,
                cond: '@v@ in some words of foreign origin such as @November@ and @Universität@',
                pron: '#[v]#'
            }
        ]
    }, {
        key: 34,
        primary: 'W',
        sub: null,
        poss: 'Possibilities: #[v]#',
        rules: [
            {
                key: 1,
                cond: '@w@',
                pron: '#[v]#'
            }
        ]
    }, {
        key: 35,
        primary: 'X',
        sub: null,
        poss: 'Possibilities: #[ks]#',
        rules: [
            {
                key: 1,
                cond: '@x@',
                pron: '#[x]# - Note: opens preceding vowel'
            }
        ]
    }, {
        key: 36,
        primary: 'Y',
        sub: null,
        poss: 'Possibilities: #[y]#, #[ʏ]#, #[i]#, #[j]#',
        rules: [
            {
                key: 1,
                cond: '@y@ in @Lyrik@, @typisch@, or @Mythe@',
                pron: '#[y]#'
            }, {
                key: 2,
                cond: '@y@ in @Nymphe@, @Myrte@, or @Zephyr@',
                pron: '#[ʏ]#'
            }, {
                key: 3,
                cond: '@y@ in @Tyrol@ or @Zylinder@',
                pron: '#[i]#'
            }, {
                key: 4,
                cond: '@y@ in @York@ or @Yeoman@',
                pron: '#[j]#'
            }
        ]
    }, {
        key: 37,
        primary: 'Z',
        sub: null,
        poss: 'Possibilities: #[ts]#',
        rules: [
            {
                key: 1,
                cond: '@z@/@zz@',
                pron: '#[ts]#'
            }
        ]
    },
]

export default germanRules