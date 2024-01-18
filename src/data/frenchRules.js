const frenchRules = [
    {
        key: 1,
        primary: 'A',
        sub: 'a/à/â',
        poss: 'Possibilities: #[a]#, #[ɑ]#',
        rules: [
            {
                key: 1,
                cond: '@à@',
                pron: 'Always #[a]#'
            }, {
                key: 2,
                cond: 'Single letter @a@',
                pron: 'Usually #[a]#'
            }, {
                key: 3,
                cond: 'Single letter @a@ + #[s]# or #[z]#',
                pron: 'Sometimes #[ɑ]#'
            }, {
                key: 4,
                cond: 'Single letter @a@ + silent @s@',
                pron: 'Usually #[ɑ]#'
            }, {
                key: 5,
                cond: '@â@',
                pron: 'always #[ɑ]#'
            } 
        ]
    }, {
        key: 2,
        primary: 'A',
        sub: 'ai',
        poss: 'Possibilities: #[ɛ]#, #[e]#.',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @ai@ NOT in combination with @il@, @m@, or @n@',
                pron: '#[ɛ]#'
            }, {
                key: 2,
                cond: 'Final @ai@',
                pron: '#[e]#'
            }, {
                key: 3,
                cond: 'Clarificatino: @ail@, @aill@, and @aille@ = ',
                pron: '#[aj]# - In these cases, the @ai@ is not a letter grouping; instead, @a@ is considered a standalone vowel, and the @il@/@ill@/@ille@ that follows is a separate unit.'
            }
        ]
    }, {
        key: 3,
        primary: 'A',
        sub: 'aim/ain',
        poss: 'Possibilities: #[ɛ̃]#, #[ɛm]#/#[ɛn]#',
        rules: [
            {
                key: 1,
                cond: 'Final @aim@ or @ain@, or @aim@/@ain@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɛ̃]# - The @m@/@n@ is NOT pronounced.'
            }, {
                key: 2,
                cond: '@aim@ or @ain@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[ɛm]#/#[ɛn]#'
            }
        ]
    }, {
        key: 4,
        primary: 'A',
        sub: 'am/an',
        poss: 'Possibilities: #[ɑ̃]#, #[am]#/#[an]#',
        rules: [
            {
                key: 1,
                cond: 'Final @am@ or @an@, or @am@/@an@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɑ̃]# - The @m@/@n@ is NOT pronounced.'
            }, {
                key: 2,
                cond: '@am@ or @an@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[am]#/#[an]#'
            } 
        ]
    }, {
        key: 5,
        primary: 'A',
        sub: 'au',
        poss: 'Possibilities: #[o]#, #[ɔ]#',
        rules: [
            {
                key: 1,
                cond: '@a@u and @aux@',
                pron: 'Usually #[o]#'
            }, {
                key: 2,
                cond: '@au@ + @r@',
                pron: '#[ɔ]#'
            }  
        ]
    }, {
        key: 6,
        primary: 'A',
        sub: 'ay',
        poss: 'Possibilities: #[ɛj]#',
        rules: [
            {
                key: 1,
                cond: '@ay@',
                pron: '#[ɛj]#'
            }, {
                key: 2,
                cond: 'Exception: the word @pays@',
                pron: '#[pe ˈi]#'
            }
        ]
    }, {
        key: 7,
        primary: 'B',
        sub: null,
        poss: 'Possibilities: #[b]#, #[p]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @b@ or @bb@',
                pron: '#[b]#'
            }, {
                key: 2,
                cond: 'Final @b@',
                pron: 'Sometimes #[b]#'
            }, {
                key: 3,
                cond: 'Final @b@ after a nasal',
                pron: 'Silent'
            }, {
                key: 4,
                cond: '@b@ + @s@ or @t@',
                pron: '#[p]#'
            }  
        ]
    }, {
        key: 8,
        primary: 'C',
        sub: 'c',
        poss: 'Possibilities: #[k]#, #[s]#, silent',
        rules: [
            {
                key: 1,
                cond: '@c@ + @a@, @o@, @u@, or a consonant',
                pron: '#[k]#'
            }, {
                key: 2,
                cond: '@c@ + @e@, @i@, or @y@',
                pron: '#[s]#'
            }, {
                key: 3,
                cond: 'Final @c@',
                pron: 'Usually #[k]#'
            }, {
                key: 4,
                cond: 'Final @c@ after @n@',
                pron: 'Usually silent'
            }   
        ]
    }, {
        key: 9,
        primary: 'C',
        sub: 'cc',
        poss: 'Possibilities: #[k]#, #[ks]#',
        rules: [
            {
                key: 1,
                cond: '@cc@ + @a@, @o@, @u@, or a consonant',
                pron: '#[k#'
            }, {
                key: 2,
                cond: '@cc@ + @e@, @i@, or @y@',
                pron: '#[ks]#'
            }
        ]
    }, {
        key: 10,
        primary: 'C',
        sub: 'ç',
        poss: 'Possibilities: #[s]#',
        rules: [
            {
                key: 1,
                cond: '@ç@',
                pron: '#[s]#'
            }
        ]
    }, {
        key: 11,
        primary: 'C',
        sub: 'ch',
        poss: 'Possibilities: #[ʃ]#, #[k]#',
        rules: [
            {
                key: 1,
                cond: '@ch@',
                pron: 'Usually #[ʃ]#'
            }, {
                key: 2,
                cond: '@ch@',
                pron: 'Sometimes #[k]#, specifically in words that came from Greek.'
            }
        ]
    }, {
        key: 12,
        primary: 'C',
        sub: 'ct',
        poss: 'Possibilities: #[kt]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Final @ct@',
                pron: 'Sometimes #[kt]# and sometimes silent'
            }
        ]
    }, {
        key: 13,
        primary: 'D',
        sub: null,
        poss: 'Possibilities: #[d]#, #[t]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @d@ or @dd@',
                pron: 'Usually #[d]#'
            }, {
                key: 2,
                cond: 'Final @d@',
                pron: 'Usually silent'
            }, {
                key: 3,
                cond: '@d@ in liaison',
                pron: '#[t]#'
            }   
        ]
    }, {
        key: 14,
        primary: 'E',
        sub: 'é/è/ê/ë',
        poss: 'Possibilities: #[e]#, #[ɛ]#',
        rules: [
            {
                key: 1,
                cond: '@é@',
                pron: '#[e]#'
            }, {
                key: 2,
                cond: '@è@, @ê@, or @ë@',
                pron: '#[ɛ]#'
            }
        ]
    }, {
        key: 15,
        primary: 'E',
        sub: 'e',
        poss: 'Possibilities: #[ə]#, #[ɛ]#, #[e]#',
        rules: [
            {
                key: 1,
                cond: '@e@ + single consonant + vowel',
                pron: '#[ə]#'
            }, {
                key: 2,
                cond: '@e@ + multiple consonants',
                pron: 'Usually #[ɛ]#'
            }, {
                key: 3,
                cond: '@e@ + @ss@ or @ff@',
                pron: '#[e]#'
            }, {
                key: 4,
                cond: '@e@ within the prefix @re-@',
                pron: '#[ə]#'
            }, {
                key: 5,
                cond: 'e + final pronounced consonant',
                pron: '#[ɛ]#'
            }, {
                key: 6,
                cond: '@e@ + final silent consonant',
                pron: 'Usually #[e]#, possibly #[ə]# or silent'
            }, {
                key: 7,
                cond: 'Final @e@',
                pron: '#[ə]#'
            }
        ]
    }, {
        key: 16,
        primary: 'E',
        sub: 'er',
        poss: 'Possibilities: #[e]#, #[ɛr]#',
        rules: [
            {
                key: 1,
                cond: 'Final @er@',
                pron: 'Almost always #[e]#'
            }, {
                key: 2,
                cond: 'Final @er@ in nouns or adjectives',
                pron: 'Sometimes #[ɛr]#'
            }
        ]
    }, {
        key: 17,
        primary: 'E',
        sub: 'es',
        poss: '#[ə]#, #[e]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Final @es@ in a multisyllable word',
                pron: '#[ə]# or silent; in song, this depends on whether or not that syllable is given its own note.'
            }, {
                key: 2,
                cond: 'Final @es@ in a one-syllable word',
                pron: '#[e]#'
            }
        ]
    }, {
        key: 18,
        primary: 'E',
        sub: 'et',
        poss: 'Possibilities: #[ɛ]#, #[e]#',
        rules: [
            {
                key: 1,
                cond: 'Final @et@ in a multisyllable word',
                pron: '#[ɛ]#'
            }, {
                key: 2,
                cond: '@et@ as a whole word',
                pron: '#[e]#'
            }
        ]
    }, {
        key: 19,
        primary: 'E',
        sub: 'eau',
        poss: 'Possibilities: #[o]#',
        rules: [
            {
                key: 1,
                cond: '@eau@ or @eaux@',
                pron: '#[o]#'
            }  
        ]
    }, {
        key: 20,
        primary: 'E',
        sub: 'ei',
        poss: 'Possibilities: #[ɛ]#, #[ɛj]#',
        rules: [
            {
                key: 1,
                cond: '@ei@',
                pron: '#[ɛ]#'
            }, {
                key: 2,
                cond: '@eil@, @eill@, or @eille@',
                pron: '#[ɛj]#'
            }
        ]
    }, {
        key: 21,
        primary: 'E',
        sub: 'eim/ein',
        poss: 'Possibilities: #[ɛ̃]#, #[ɛ]#',
        rules: [
            {
                key: 1,
                cond: 'Final @eim@ or @ein@, or @eim@/@ein@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɛ̃]# - The @m@/@n@ is NOT pronounced.'
            }, {
                key: 2,
                cond: '@eim@ or @ein@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[ɛm]#/#[ɛn]#'
            }
        ]
    }, {
        key: 22,
        primary: 'E',
        sub: 'em/en',
        poss: 'Possibilities: #[ɑ̃]#, #[ɛ̃]#, #[ə]#, other',
        rules: [
            {
                key: 1,
                cond: 'Final @em@ or @en@, or @em@/@en@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɑ̃]# - The @m@/@n@ is NOT pronounced.'
            }, {
                key: 2,
                cond: '@i@ + @em@/@en@',
                pron: '#[ɛ̃]#'
            }, {
                key: 3,
                cond: '@em@ or @en@ + a vowel, another @m@ or @n@, or an @h@',
                pron: 'NOT nasal, follows standard @e@/@é@/@è@/@ê@/@ë@ pronunciation + #[m]#/#[n]#. Exception: @femme@ = #[ˈfa mə]#'
            }, {
                key: 4,
                cond: 'Final @ent@ in third person plural verb endings',
                pron: '#[ə]#'
            }, {
                key: 5,
                cond: 'Final @ent@ NOT in third person plural verb endings',
                pron: '#[ɑ̃]#'
            }  
        ]
    }, {
        key: 23,
        primary: 'E',
        sub: 'eu/eû',
        poss: 'Possibilities: #[œ]#, #[ø]#, #[y]#',
        rules: [
            {
                key: 1,
                cond: 'Interior @eu@',
                pron: 'Usually #[œ]#'
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 24,
        primary: 'F',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 26,
        primary: 'G',
        sub: 'g',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 27,
        primary: 'G',
        sub: 'gg',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 28,
        primary: 'G',
        sub: 'gn',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 29,
        primary: 'H',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 30,
        primary: 'I',
        sub: 'i/î',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 31,
        primary: 'I',
        sub: 'ien',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 32,
        primary: 'I',
        sub: 'ient',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 33,
        primary: 'I',
        sub: 'il/ill/ille',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 34,
        primary: 'I',
        sub: 'im/in',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 35,
        primary: 'J',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 36,
        primary: 'K',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 37,
        primary: 'L',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 38,
        primary: 'M',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 39,
        primary: 'N',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 40,
        primary: 'O',
        sub: 'o',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 41,
        primary: 'O',
        sub: 'oeu',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 42,
        primary: 'O',
        sub: 'oi',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 43,
        primary: 'O',
        sub: 'oin',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 44,
        primary: 'O',
        sub: 'om/on',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 45,
        primary: 'O',
        sub: 'ou',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 46,
        primary: 'O',
        sub: 'oy',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 47,
        primary: 'P',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 48,
        primary: 'Q',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 49,
        primary: 'R',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 50,
        primary: 'S',
        sub: 's',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 51,
        primary: 'S',
        sub: 'sc',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 52,
        primary: 'S',
        sub: 'sch',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 53,
        primary: 'T',
        sub: 't',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 54,
        primary: 'T',
        sub: 'th',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 55,
        primary: 'U',
        sub: 'u',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 56,
        primary: 'U',
        sub: 'ue',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 57,
        primary: 'U',
        sub: 'um/un',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 58,
        primary: 'V',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 59,
        primary: 'W',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 60,
        primary: 'X',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 61,
        primary: 'Y',
        sub: 'y',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 62,
        primary: 'Y',
        sub: 'ym/yn',
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    }, {
        key: 63,
        primary: 'Z',
        sub: null,
        rules: [
            {
                key: 1,
                cond: 'blah',
                pron: ''
            }, {
                key: 2,
                cond: 'blah2',
                pron: ''
            }, {
                key: 3,
                cond: 'blah3',
                pron: ''
            }   

        ]
    },
]

export default frenchRules