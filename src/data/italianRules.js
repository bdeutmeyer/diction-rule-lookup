const italianRules = [
    {
        key: 1,
        primary: 'A',
        sub: 'a',
        poss: 'Possibilities: #[ɑ]#',
        rules: [
            {
                key: 1,
                cond: '@a@',
                pron: '#[ɑ]#'
            }
        ]
    }, {
        key: 2,
        primary: 'A',
        sub: 'ae/ai/ao/au',
        poss: 'Possibilities: #[ˈɑ ɛ]#, #[ɑːi]#, #[ˈɑ ɔ]#, #[ɑːu]#',
        rules: [
            {
                key: 1,
                cond: '@ae@',
                pron: '#[ˈɑ ɛ]#  (two syllables)'
            }, {
                key: 2,
                cond: '@ai@',
                pron: '#[ɑːi]#  (diphthong)'
            }, {
                key: 3,
                cond: '@ao@',
                pron: '#[ˈɑ ɔ]#  (two syllables)'
            }, {
                key: 4,
                cond: '@au@',
                pron: '#[ɑːu]#  (diphthong)'
            }
        ]
    }, {
        key: 3,
        primary: 'A',
        sub: 'aio/aiu/aiuo',
        poss: 'Possibilities: #[ɑ ˈjɔ]#, #[ɑ ˈju]#, #[ɑ ˈjwɔ]#',
        rules: [
            {
                key: 1,
                cond: '@aio@',
                pron: '#[ɑ ˈjɔ]#'
            }, {
                key: 2,
                cond: '@aiu@',
                pron: '#[ɑ ˈju]#'
            }, {
                key: 3,
                cond: '@aiuo@',
                pron: '#[ɑ ˈjwɔ]#'
            }
        ]
    }, {
        key: 4,
        primary: 'B',
        sub: null,
        poss: 'Possibilities: #[b]#, #[bː b]#',
        rules: [
            {
                key: 1,
                cond: '@b@',
                pron: '#[b]#'
            }, {
                key: 2,
                cond: '@bb@',
                pron: '#[bː b]#'
            }
        ]
    }, {
        key: 5,
        primary: 'C',
        sub: 'c/cc',
        poss: 'Possibilities: #[k]#, #[kː k]#, #[tʃ]#, #[tː tʃ]#',
        rules: [
            {
                key: 1,
                cond: '@c@ + @a@, @o@, @u@, or a consonant',
                pron: '#[k]#'
            }, {
                key: 2,
                cond: '@cc@ + @a@, @o@, or @u@',
                pron: '#[kː k]#'
            }, {
                key: 3,
                cond: '@c@ + @e@ or @i@',
                pron: '#[tʃ]#'
            }, {
                key: 4,
                cond: '@cc@ + @e@ or @i@',
                pron: '#[tː tʃ]#'
            }
        ]
    }, {
        key: 6,
        primary: 'C',
        sub: 'ch/cch/cq',
        poss: 'Possibilities: #[k]#, #[kː k]#',
        rules: [
            {
                key: 1,
                cond: '@ch@',
                pron: '#[k]#'
            }, {
                key: 2,
                cond: '@cch@',
                pron: '#[kː k]#'
            }, {
                key: 3,
                cond: '@cq@',
                pron: '#[kː k]#'
            }
        ]
    }, {
        key: 7,
        primary: 'D',
        sub: null,
        poss: 'Possibilities: #[d]#, #[dː d]#',
        rules: [
            {
                key: 1,
                cond: '@d@',
                pron: '#[d]#'
            }, {
                key: 2,
                cond: '@dd@',
                pron: '#[dː d]#'
                
            }
        ]
    }, {
        key: 8,
        primary: 'E',
        sub: 'e',
        poss: 'Possibilities: #[e]#, #[ɛ]#',
        rules: [
            {
                key: 1,
                cond: 'Unstressed @e@',
                pron: 'Usually #[e]#'
            }, {
                key: 2,
                cond: 'Unstressed @e@ + @l@/@m@/@n@/@r@ + another consonant',
                pron: '#[ɛ]#'
            }, {
                key: 3,
                cond: '@e@ as the end of a stressed syllable',
                pron: 'Usually #[e]# (see following rules for some cases of exception)'
            }, {
                key: 4,
                cond: '@e@ as the end of an antepenult stressed syllable',
                pron: '#[ɛ]#'
            }, {
                key: 5,
                cond: '@e@ as the end of a stressed syllable, followed by a syllable beginning with @s@ + another consonant',
                pron: '#[ɛ]#'
            }, {
                key: 6,
                cond: '@i@/@u@ + @e@ as the end of a stressed syllable',
                pron: 'Usually #[ɛ]#'
            }, {
                key: 7,
                cond: 'Stressed @e@ + double consonant',
                pron: 'Sometimes #[e]#, sometimes #[ɛ]# - consult a dictionary'
            }, {
                key: 8,
                cond: 'Stressed @e@ in @-emmo@/@-esco@/@-essa@/@-esti@/@-evole@/@-ezza@/@-mente@/@-etto@/@-etta@/@-etti@/@-ette@',
                pron: 'Usually #[e]#'
            }, {
                key: 9,
                cond: 'Stressed @e@ in @-ero@/@-ello@/@-ente@',
                pron: 'Usually #[ɛ]#'
            }
        ]
    }, {
        key: 9,
        primary: 'E',
        sub: 'è/é',
        poss: 'Possibilities: #[e]#',
        rules: [
            {
                key: 8,
                cond: 'Final @è@/@é@',
                pron: '#[e]# - Note: @è@ as a full word = #[ɛ]#'
            }
        ]
    }, {
        key: 10,
        primary: 'E',
        sub: 'ea/ei/eo/eu',
        poss: 'Possibilities: #[ˈɛ ɑ]#, #[ɛːi]#, #[ˈɛ ɔ]#, #[ɛːu]#',
        rules: [
            {
                key: 1,
                cond: '@ea@',
                pron: '#[ˈɛ ɑ]#  (two syllables)'
            }, {
                key: 2,
                cond: '@ei@',
                pron: '#[ɛːi]#  (diphthong)'
            }, {
                key: 3,
                cond: '@eo@',
                pron: '#[ˈɛ ɔ]#  (two syllables)'
            }, {
                key: 4,
                cond: '@eu@',
                pron: '#[ɛːu]#  (diphthong)'
            }
        ]
    }, {
        key: 11,
        primary: 'F',
        sub: null,
        poss: 'Possibilities: #[f]#, #[fː f]#',
        rules: [
            {
                key: 1,
                cond: '@f@',
                pron: '#[f]#'
            }, {
                key: 2,
                cond: '@ff@',
                pron: '#[fː f]#'
            }
        ]
    }, {
        key: 12,
        primary: 'G',
        sub: 'g/gg/gh',
        poss: 'Possibilities: #[g]#, #[dʒ]#, #[gː g]#, #[dː dʒ]#',
        rules: [
            {
                key: 1,
                cond: '@g@ + @a@, @o@, @u@, or a consonant',
                pron: '#[g]#'
            }, {
                key: 2,
                cond: '@g@ + @e@ or @i@',
                pron: '#[dʒ]#'
            }, {
                key: 3,
                cond: '@gg@ + @a@, @o@, @u@, or a consonant',
                pron: '#[gː g]#'
            }, {
                key: 4,
                cond: '@gg@ + @e@ or @i@',
                pron: '#[dː dʒ]#'
            }, {
                key: 5,
                cond: '@gh@',
                pron: '#[g]#'
            }
        ]
    }, {
        key: 13,
        primary: 'G',
        sub: 'gl/gli',
        poss: 'Possibilities: #[gl]#, #[ʎ]#',
        rules: [
            {
                key: 1,
                cond: '@gl@ + @a@, @e@, @o@, or @u@',
                pron: '#[gl]#'
            }, {
                key: 2,
                cond: '@gli@',
                pron: '#[ʎ]#'
            }
        ]
    }, {
        key: 14,
        primary: 'G',
        sub: 'gn',
        poss: 'Possibilities: #[ɲ]#',
        rules: [
            {
                key: 1,
                cond: '@gn@',
                pron: '#[ɲ]#'
            }
        ]
    }, {
        key: 15,
        primary: 'H',
        sub: null,
        poss: 'Possibilities: silent',
        rules: [
            {
                key: 1,
                cond: '@h@',
                pron: 'Always silent'
            }, {
                key: 2,
                cond: '@ch@ or @gh@',
                pron: 'Hardens preceding consonant to #[k]# or #[g]#'
            }
        ]
    }, {
        key: 16,
        primary: 'I',
        sub: 'i',
        poss: 'Possibilities: #[i]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Final @i@, or @i@ + a consonant',
                pron: '#[i]#'
            }, {
                key: 2,
                cond: 'Another vowel + @i@',
                pron: '#[i]#'
            }, {
                key: 3,
                cond: '@c@/@g@/@sc@ + @i@ + @a@/@e@/@o@/@u@',
                pron: 'Silent - softens the preceding @c@/@g@/@sc@ to #[tʃ]# / #[dʒ]# / #[ʃ]#'
            }
        ]
    }, {
        key: 17,
        primary: 'I',
        sub: 'ia/io/iu/iù',
        poss: 'Possibilities: #[jɑ]#, #[ˈi ɑ]#, #[jɔ]#, #[ˈi o]#, #[ju]#',
        rules: [
            {
                key: 1,
                cond: 'Interior @ia@, or final unstressed @ia@',
                pron: '#[jɑ]#  (glide)'
            }, {
                key: 2,
                cond: '@ia@ in 3-letter words with no accent marks, or @ia@ in multisyllable words when the @i@ is stressed  and there is no accent mark over the @a@',
                pron: '#[ˈi ɑ]#  (two syllables)'
            }, {
                key: 3,
                cond: 'Interior @io@, or final unstressed @io@',
                pron: '#[jɔ]#  (glide)'
            }, {
                key: 4,
                cond: '@io@ in 3-letter words with no accent marks, or @io@ in multisyllable words when the @i@ is stressed and there is no accent mark over the @o@',
                pron: '#[ˈi o]#  (two syllables)'
            }, {
                key: 5,
                cond: 'Interior @iu@, or final unstressed @iù@',
                pron: '#[ju]#  (glide)'
            }
        ]
    }, {
        key: 18,
        primary: 'I',
        sub: 'ie/iè/iei',
        poss: 'Possibilities: #[jɛ]#, #[ˈi e]#, #[jɛːi]#',
        rules: [
            {
                key: 1,
                cond: 'Interior @ie@, or final @iè@',
                pron: 'Usually #[jɛ]#, sometimes #[je]#  (both glides)'
            }, {
                key: 2,
                cond: '@ie@ in 3-letter words with no accent marks, or @ie@ in multisyllable words when the @i@ is stressed and there is no accent mark over the @e@',
                pron: '#[ˈi e]#  (two syllables)'
            }, {
                key: 3,
                cond: '@iei@',
                pron: '#[jɛːi]#  (triphthong)'
            }
        ]
    }, {
        key: 19,
        primary: 'J',
        sub: null,
        poss: 'Possibilities: #[j]#',
        rules: [
            {
                key: 1,
                cond: '@j@',
                pron: '#[j]#'
            }
        ]
    }, {
        key: 20,
        primary: 'K',
        sub: null,
        poss: 'Possibilities: variable',
        rules: [
            {
                key: 1,
                cond: '@k@',
                pron: 'Only occurs in words of foreign origin; pronounced as it would be in that language'
            }
        ]
    }, {
        key: 20,
        primary: 'L',
        sub: null,
        poss: 'Possibilities: #[l]#, #[lː l]#',
        rules: [
            {
                key: 1,
                cond: '@l@',
                pron: '#[l]#'
            }, {
                key: 2,
                cond: '@ll@',
                pron: '#[lː l]#'
            }
        ]
    }, {
        key: 21,
        primary: 'M',
        sub: null,
        poss: 'Possibilities: #[m]#, #[mː m]#',
        rules: [
            {
                key: 1,
                cond: '@m@',
                pron: '#[m]#'
            }, {
                key: 2,
                cond: '@mm@',
                pron: '#[mː m]#'
            }
        ]
    }, {
        key: 22,
        primary: 'N',
        sub: null,
        poss: 'Possibilities: #[n]#, #[nː n]#, #[ŋ]#, #[ɲ]#',
        rules: [
            {
                key: 1,
                cond: '@n@',
                pron: '#[n]#'
            }, {
                key: 2,
                cond: '@nn@',
                pron: '#[nː n]#'
            }, {
                key: 3,
                cond: '@n@ + #[g]# or #[k]#',
                pron: '#[ŋ]#'
            }, {
                key: 4,
                cond: '@gn@',
                pron: '#[ɲ]#'
            }
        ]
    }, {
        key: 23,
        primary: 'O',
        sub: 'o/ò',
        poss: 'Possibilities: #[o]#, #[ɔ]#',
        rules: [
            {
                key: 1,
                cond: 'Unstressed @o@',
                pron: 'Usually #[o]#'
            }, {
                key: 2,
                cond: 'Unstressed @o@ + @r@ + another consonant',
                pron: '#[ɔ]#'
            }, {
                key: 3,
                cond: 'Stressed @o@ when final in syllable',
                pron: 'Usually #[o]# (see rules below for cases of exception)'
            }, {
                key: 4,
                cond: '@o@ as the end of an antepenult stressed syllable',
                pron: '#[ɔ]#'
            }, {
                key: 5,
                cond: '@i@/@u@ + @o@ as the end of a stressed syllable',
                pron: '#[ɔ]#',
            }, {
                key: 6,
                cond: 'Final accented @ò@',
                pron: '#[ɔ]#'
            }, {
                key: 7,
                cond: '@o@ + @gli@',
                pron: '#[ɔ]#'
            }, {
                key: 8,
                cond: 'Stressed @o@ + a consonant + a glide',
                pron: '#[ɔ]#'
            }, {
                key: 9,
                cond: 'Stressed @o@ in noun ending @-oro@/@-ori@',
                pron: '#[ɔ]#'
            }
        ]
    }, {
        key: 24,
        primary: 'O',
        sub: 'oa/oe/oi/oia/oja',
        poss: 'Possibilities: #[ˈɔ ɑ]#, #[ˈɔ ɛ]#, #[ɔːi]#, #[ˈɔ jɑ]#',
        rules: [
            {
                key: 1,
                cond: '@oe@',
                pron: '#[ˈɔ ɑ]#  (two syllables)'
            }, {
                key: 2,
                cond: '@oe@',
                pron: '#[ˈɔ ɛ]#  (two syllables)'
            }, {
                key: 3,
                cond: '@oi@',
                pron: 'Usually #[ɔːi]#  (diphthong)'
            }, {
                key: 4,
                cond: '@oia@/@oja@',
                pron: '#[ˈɔ jɑ]#  (two syllables)'
            }
        ]
    }, {
        key: 25,
        primary: 'P',
        sub: null,
        poss: 'Possibilities: #[p]#, #[pː p]#',
        rules: [
            {
                key: 1,
                cond: '@p@',
                pron: '#[p]#'
            }, {
                key: 2,
                cond: '@pp@',
                pron: '#[pː p]#'
            }
        ]
    }, {
        key: 26,
        primary: 'Q',
        sub: null,
        poss: 'Possibilities: #[kw]#',
        rules: [
            {
                key: 1,
                cond: '@qu@',
                pron: 'Combination is #[kw]#'
            }
        ]
    }, {
        key: 27,
        primary: 'R',
        sub: null,
        poss: 'Possibilities: #[r]#',
        rules: [
            {
                key: 1,
                cond: 'Intervocalic @r@',
                pron: '#[r]#  (flipped)'
            }, {
                key: 2,
                cond: '@r@ in all other circumstances',
                pron: '#[r]#  (rolled)'
            }, {
                key: 2,
                cond: '@rr@',
                pron: '#[rː r]#  (extended roll)'
            }
        ]
    }, {
        key: 28,
        primary: 'S',
        sub: 's/ss',
        poss: 'Possibilities: #[s]#, #[z]#, #[sː s]#',
        rules: [
            {
                key: 1,
                cond: 'Initial @s@ + a vowel',
                pron: '#[s]#'
            }, {
                key: 2,
                cond: 'A consonant + @s@ + a vowel, when @s@ is initial in a syllable',
                pron: '#[s]#'
            }, {
                key: 3,
                cond: '@s@ when initial in a syllable + an unvoiced consonant',
                pron: '#[s]#'
            }, {
                key: 4,
                cond: 'Final @s@',
                pron: '#[s]#'
            }, {
                key: 5,
                cond: 'Intervocalic @s@',
                pron: '#[z]#'
            }, {
                key: 6,
                cond: 'Initial @s@ + a voiced consonant',
                pron: '#[z]#'
            }, {
                key: 7,
                cond: '@ss@',
                pron: '#[sː s]#'
            }
        ]
    }, {
        key: 29,
        primary: 'S',
        sub: 'sc/sch',
        poss: 'Possibilities: #[sk]#, #[ʃ]#',
        rules: [
            {
                key: 1,
                cond: '@sc@ + @a@, @o@, or @u@',
                pron: '#[sk]#'
            }, {
                key: 2,
                cond: '@sc@ + @e@ or @i@',
                pron: '#[ʃ]#'
            }, {
                key: 3,
                cond: '@sch@',
                pron: '#[sk]#'
            }
        ]
    }, {
        key: 30,
        primary: 'T',
        sub: null,
        poss: 'Possibilities: #[t]#, #[tː t]#',
        rules: [
            {
                key: 1,
                cond: '@t@',
                pron: '#[t]#'
            }, {
                key: 2,
                cond: '@tt@',
                pron: '#[tː t]#'
            }
        ]
    }, {
        key: 31,
        primary: 'U',
        sub: 'u',
        poss: 'Possibilities: #[u]#',
        rules: [
            {
                key: 1,
                cond: '@u@',
                pron: '#[u]#'
            }
        ]
    }, {
        key: 32,
        primary: 'U',
        sub: 'ua/ue/ui/uo',
        poss: 'Possibilities: #[wɑ]#, #[ˈu ɑ]#, #[wɛ]#, #[ˈu ɛ]#, #[wi]#, #[ˈu i]#, #[wɔ]#, #ˈu o]#',
        rules: [
            {
                key: 1,
                cond: '@ua@',
                pron: 'Usually #[wɑ]#  (glide)'
            }, {
                key: 2,
                cond: '@ua@ in 3-letter words with no accent mark',
                pron: '#[ˈu ɑ]#  (two syllables)'
            }, {
                key: 3,
                cond: '@ue@',
                pron: 'Usually #[wɛ]#  (glide)'
            }, {
                key: 4,
                cond: '@ue@ in 3-letter words with no accent mark',
                pron: '#[ˈu ɛ]#  (two syllables)'
            }, {
                key: 5,
                cond: '@ui@',
                pron: 'Usually #[wi]#  (glide)'
            }, {
                key: 6,
                cond: '@ui@ in 3-letter words with no accent mark',
                pron: '#[ˈu i]#  (two syllables)'
            }, {
                key: 7,
                cond: '@uo@',
                pron: 'Usually #[wɔ]#  (glide)'
            }, {
                key: 8,
                cond: 'Final @uo@ in 3-letter words with no accent mark',
                pron: '#[ˈu o]#  (two syllables)'
            }
        ]
    }, {
        key: 33,
        primary: 'U',
        sub: 'uai/uie/uio/uoi/uoio',
        poss: 'Possibilities: #[wɑːi]#, #[wjɛ]#, #[u jo]#, #[wɔːi]#, #[wɔ jɔ]#',
        rules: [
            {
                key: 1,
                cond: '@uai@',
                pron: '#[wɑːi]#',
            }, {
                key: 2,
                cond: '@uie@',
                pron: '#[wjɛ]#'
            }, {
                key: 3,
                cond: '@uio@',
                pron: '#[ˈu jo]#'
            }, {
                key: 4,
                cond: '@uoi@',
                pron: '#[wɔːi]#'
            }, {
                key: 5,
                cond: '@uoio@',
                pron: '#[ˈwɔ jɔ]#'
            }
        ]
    }, {
        key: 34,
        primary: 'V',
        sub: null,
        poss: 'Possibilities: #[v]#, #[vː v]#',
        rules: [
            {
                key: 1,
                cond: '@v@',
                pron: '#[v]#'
            }, {
                key: 2,
                cond: '@vv@',
                pron: '#[vː v]#'
            }
        ]
    }, {
        key: 35,
        primary: 'W',
        sub: null,
        poss: 'Possibilities: variable',
        rules: [
            {
                key: 1,
                cond: '@w@',
                pron: 'Only occurs in words of foreign origin; pronounced as it would be in that language'
            }
        ]
    }, {
        key: 36,
        primary: 'X',
        sub: null,
        poss: 'Possibilities: variable',
        rules: [
            {
                key: 1,
                cond: '@x@',
                pron: 'Only occurs in words of foreign origin; pronounced as it would be in that language'
            }
        ]
    }, {
        key: 37,
        primary: 'Y',
        sub: null,
        poss: 'Possibilities: variable',
        rules: [
            {
                key: 1,
                cond: '@y@',
                pron: 'Only occurs in words of foreign origin; pronounced as it would be in that language'
            }
        ]
    }, {
        key: 38,
        primary: 'Z',
        sub: null,
        poss: 'Possibilities: #[ts]#, #[dz]#, #[tː ts]#, #[dː dz]#',
        rules: [
            {
                key: 1,
                cond: '@z@',
                pron: '#[ts]# or #[dz]# - consult a dictionary'
            }, {
                key: 2,
                cond: '@zz@',
                pron: '#[tː ts]# or #[dː dz]# - consult a dictionary'
            }
        ]
    }
]

export default italianRules