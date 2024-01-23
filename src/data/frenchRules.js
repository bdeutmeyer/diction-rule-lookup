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
                cond: 'Clarification: @ail@, @aill@, and @aille@ = ',
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
                pron: '#[ɛ̃]# - the @m@/@n@ is NOT pronounced.'
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
                pron: '#[ɑ̃]# - the @m@/@n@ is NOT pronounced.'
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
                pron: '#[k]#'
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
                pron: '#[ɛ̃]# - the @m@/@n@ is NOT pronounced.'
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
                pron: '#[ɑ̃]# - the @m@/@n@ is NOT pronounced.'
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
                cond: '@eu@ as final sound in word',
                pron: '#[ø]#'
            }, {
                key: 3,
                cond: '@eu@ before #[z]#',
                pron: '#[ø]#'
            }, {
                key: 4,
                cond: '@eû@',
                pron: '#[ø]#'
            }, {
                key: 5,
                cond: '@eu@/@eû@ in some tenses of @avoir@',
                pron: '#[y]#'
            }
        ]
    }, {
        key: 24,
        primary: 'F',
        sub: null,
        poss: 'Possibilities: #[f]#, #[v]#',
        rules: [
            {
                key: 1,
                cond: '@f@, @ff@',
                pron: '#[f]#'
            }, {
                key: 2,
                cond: '@f@ in liaison',
                pron: '#[v]#'
            }
        ]
    }, {
        key: 25,
        primary: 'G',
        sub: 'g',
        poss: 'Possibilities: #[g]#, #[ʒ]#, #[k]#, silent',
        rules: [
            {
                key: 1,
                cond: '@g@ + @a@, @o@, @u@, or a consonant',
                pron: '#[g]# - Exception: @gt@ = silent'
            }, {
                key: 2,
                cond: '@g@ + @e@, @i@, or @y@',
                pron: '#[ʒ]#'
            }, {
                key: 3,
                cond: 'Final @g@',
                pron: 'Usually silent'
            }, {
                key: 4,
                cond: '@g@ in liaison',
                pron: '#[k]#'
            }
        ]
    }, {
        key: 26,
        primary: 'G',
        sub: 'gg',
        poss: 'Possibilities: #[g]#, #[gʒ]#',
        rules: [
            {
                key: 1,
                cond: '@gg@ + @a@, @o@, @u@, or a consonant',
                pron: '#[g]#'
            }, {
                key: 2,
                cond: '@gg@ + @e@, @i@, or @y@',
                pron: '#[gʒ]#'
            }
        ]
    }, {
        key: 27,
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
        key: 28,
        primary: 'H',
        sub: null,
        poss: 'Possibilities: silent, but allowing or disallowing liason and elision',
        rules: [
            {
                key: 1,
                cond: 'Mute @h@',
                pron: 'Silent, allows liason and elision'
            }, {
                key: 2,
                cond: 'Aspirate @h@',
                pron: 'Silent, but disallows liaison and elision. Generally noted in dictionaries with an asterisk (*).'
            }
        ]
    }, {
        key: 29,
        primary: 'I',
        sub: 'i/î',
        poss: 'Possibilities: #[i]#, #[j]#, #[ij]#',
        rules: [
            {
                key: 1,
                cond: 'Final @i@/@î@, or @i@/@î@ + a consonant or a mute @e@/3rd person plural @ent@ ending',
                pron: '#[i]#'
            }, {
                key: 2,
                cond: '@i@ + a stressed vowel',
                pron: '#[j]#, with exception below'
            }, {
                key: 3,
                cond: '@l@ or @r@ + @i@ + a stressed vowel',
                pron: '#[ij]#'
            }

        ]
    }, {
        key: 30,
        primary: 'I',
        sub: 'il/ill/ille',
        poss: 'Possibilities: #[j]#, #[ij]#, #[il]#',
        rules: [
            {
                key: 1,
                cond: 'Stressed vowel + @il@/@ill@/@ille@',
                pron: '#[j]#'
            }, {
                key: 2,
                cond: 'Final or interior @il@/@ill@/@ille@ as whole syllable',
                pron: '#[ij]# (see @mille@/@ville@/@tranquille@ exception immediately below)'
            }, {
                key: 3,
                cond: 'The words @mille@, @ville@, and @tranquille@ and their derivatives',
                pron: '#[il]#'
            }, {
                key: 4,
                cond: 'Initial @il@',
                pron: '#[il]#'
            }
        ]
    }, {
        key: 31,
        primary: 'I',
        sub: 'im/in',
        poss: 'Possibilities: #[ɛ̃]#, #[im]#/#[in]#',
        rules: [
            {
                key: 1,
                cond: 'Final @im@ or @in@, or @im@/@in@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɛ̃]# - the @m@/@n@ is NOT pronounced.'
            }, {
                key: 2,
                cond: '@im@/@in@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[im]#/#in]#'
            }
        ]
    }, {
        key: 32,
        primary: 'J',
        sub: null,
        poss: 'Possibilities: #[ʒ]#',
        rules: [
            {
                key: 1,
                cond: '@j@',
                pron: '#[ʒ]#'
            }
        ]
    }, {
        key: 33,
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
        key: 34,
        primary: 'L',
        sub: null,
        poss: 'Possibilities: #[l]#, #[j]#',
        rules: [
            {
                key: 1,
                cond: '@l@/@ll@ NOT preceded by @i@',
                pron: '#[l]#'
            }, {
                key: 2,
                cond: '@l@/@ll@ preceded by @i@',
                pron: '#[j]# - see @il@/@ill@/@ille@ rules for details'
            }
        ]
    }, {
        key: 35,
        primary: 'M',
        sub: null,
        poss: 'Possibilities: #[m]#, silent',
        rules: [
            {
                key: 1,
                cond: '@m@/@mm@ NOT in combination with a nasal vowel',
                pron: '#[m]#'
            }, {
                key: 2,
                cond: '@m@ in combination with a nasal vowel',
                pron: 'Silent'
            }, {
                key: 3,
                cond: '@m@ in combination with a nasal vowel in liaison',
                pron: '#[m]#'
            }

        ]
    }, {
        key: 36,
        primary: 'N',
        sub: null,
        poss: 'Possibilities: #[n]#, #[ɲ]#, silent',
        rules: [
            {
                key: 1,
                cond: '@n@/@nn@ NOT in combination with a nasal vowel',
                pron: '#[n]#'
            }, {
                key: 2,
                cond: '@n@ in combination with a nasal vowel',
                pron: 'Silent'
            }, {
                key: 3,
                cond: '@n@ in combination with a nasal vowel in liaison',
                pron: '#[n]#'
            }, {
                key: 4,
                cond: '@gn@',
                pron: '#[ɲ]#'
            }
        ]
    }, {
        key: 37,
        primary: 'O',
        sub: 'o/ô',
        poss: 'Possibilities: #[o]#, #[ɔ]#',
        rules: [
            {
                key: 1,
                cond: '@o@',
                pron: 'Usually #[ɔ]#'
            }, {
                key: 2,
                cond: '@o@ + #[z]#',
                pron: '#[o]#'
            }, {
                key: 3,
                cond: '@o@ as final sound in word',
                pron: '#[o]#'
            }, {
                key: 4,
                cond: '@ô@',
                pron: '#[o]#'
            }
        ]
    }, {
        key: 38,
        primary: 'O',
        sub: 'oeu',
        poss: 'Possibilities: #[œ]#',
        rules: [
            {
                key: 1,
                cond: '@oeu@',
                pron: 'Usually #[œ]#'
            }
        ]
    }, {
        key: 39,
        primary: 'O',
        sub: 'oi/oin',
        poss: 'Possibilities: #[wa]#, #[wɛ̃]#',
        rules: [
            {
                key: 1,
                cond: '@oi@',
                pron: 'Usually #[wa]# - Exception: @trois@ = #[trwɑ]#'
            }, {
                key: 2,
                cond: 'Final @oin@, or @oin@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[wɛ̃]# - the @n@ is NOT pronounced unless in liaison'
            }
        ]
    }, {
        key: 40,
        primary: 'O',
        sub: 'om/on',
        poss: 'Possibilities: #[õ]#, #[ɔm]#, #[ɔn]#',
        rules: [
            {
                key: 1,
                cond: 'Final @om@/@on@, or @om@/@on@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[õ]# - the @m@/@n@ is NOT pronounced unless in liaison'
            }, {
                key: 2,
                cond: '@om@/@on@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[ɔm]#/#[ɔn]#'
            }
        ]
    }, {
        key: 41,
        primary: 'O',
        sub: 'ou/où/oû',
        poss: 'Possibilities: #[u]#, #[w]#',
        rules: [
            {
                key: 1,
                cond: '@ou@/@où@/@oû@',
                pron: 'Usually #[u]#'
            }, {
                key: 2,
                cond: '@ou@ + stressed vowel',
                pron: '#[w]#'
            }
        ]
    }, {
        key: 42,
        primary: 'O',
        sub: 'oy',
        poss: 'Possibilities: #[waj]#',
        rules: [
            {
                key: 1,
                cond: '@oy@',
                pron: '#[waj]# (see @y@ rules for further explanation)'
            }
        ]
    }, {
        key: 43,
        primary: 'P',
        sub: null,
        poss: 'Possibilities: #[p]#, #[f]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @p@/@pp@',
                pron: '#[p]#'
            }, {
                key: 2,
                cond: 'Final @p@',
                pron: 'Usually silent'
            }, {
                key: 3,
                cond: '@p@ in @mpt@',
                pron: 'Silent'
            }, {
                key: 4,
                cond: '@ph@',
                pron: '#[f]#'
            }
        ]
    }, {
        key: 44,
        primary: 'Q',
        sub: null,
        poss: 'Possibilities: #[k]#',
        rules: [
            {
                key: 1,
                cond: '@qu@',
                pron: '#[k]#'
            }, {
                key: 2,
                cond: 'Final @q@',
                pron: '#[k]#'
            }
        ]
    }, {
        key: 45,
        primary: 'R',
        sub: null,
        poss: 'Possibilities: #[r]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @r@/@rr@',
                pron: '#[r]#'
            }, {
                key: 2,
                cond: 'Final @r@',
                pron: 'Usually #[r]#'
            }, {
                key: 3,
                cond: 'Final @r@ in @er@/@ier@/@yer@',
                pron: 'Silent'
            }
        ]
    }, {
        key: 46,
        primary: 'S',
        sub: 's/ss',
        poss: 'Possibilities: #[s]#, #[z]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @s@ when not intervocalic',
                pron: 'Usually #[s]#'
            }, {
                key: 2,
                cond: 'Intervocalic @s@',
                pron: '#[z]#'
            }, {
                key: 3,
                cond: 'Final @s@',
                pron: 'Silent - Exception: @hélas@ = #[e ˈlɑs]#'
            }, {
                key: 4,
                cond: '@s@ in liaison',
                pron: '#[z]#'
            }, {
                key: 5,
                cond: '@ss@',
                pron: '#[s]#'
            }
        ]
    }, {
        key: 47,
        primary: 'S',
        sub: 'sc/sch',
        poss: 'Possibilities: #[sk]#, #[s]#, #[ʃ]#',
        rules: [
            {
                key: 1,
                cond: '@sc@ + @a@, @o@, @u@, or a consonant',
                pron: '#[sk]#'
            }, {
                key: 2,
                cond: '@sc@ + @e@ or @i@',
                pron: '#[s]#'
            }, {
                key: 3,
                cond: '@sch@',
                pron: '#[ʃ]#'
            }

        ]
    }, {
        key: 48,
        primary: 'T',
        sub: 't/tt',
        poss: 'Possibilities: #[t]#, #[sj]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @t@/@tt@',
                pron: '#[t]#'
            }, {
                key: 2,
                cond: 'Final @t@',
                pron: 'Silent'
            }, {
                key: 3,
                cond: '@ti@ within @-tion@ or @-tience@',
                pron: '#[sj]#'
            }
        ]
    }, {
        key: 49,
        primary: 'T',
        sub: 'th',
        poss: 'Possibilities: #[t]#',
        rules: [
            {
                key: 1,
                cond: '@th@',
                pron: '#[t]#'
            }
        ]
    }, {
        key: 50,
        primary: 'U',
        sub: 'u/û',
        poss: 'Possibilities: #[y]#, #[ɥ]#, silent',
        rules: [
            {
                key: 1,
                cond: '@u@',
                pron: 'Usually #[y]#'
            }, {
                key: 2,
                cond: '@u@ before a stressed vowel',
                pron: '#[ɥ]# - Exception: @g@ + @u@ + stressed vowel = silent'
            }, {
                key: 3,
                cond: '@û@',
                pron: '#[y]#'
            }

        ]
    }, {
        key: 51,
        primary: 'U',
        sub: 'ue',
        poss: 'Possibilities: #[œ]#',
        rules: [
            {
                key: 1,
                cond: '@ue@ + @il@/@ill@/@ille@',
                pron: '#[œ]#'
            }, {
                key: 2,
                cond: 'Note: @u@ + mute @e@',
                pron: '#[y]# - the two letters in this case are not a letter group, so follow single letter rules'
            }
        ]
    }, {
        key: 52,
        primary: 'U',
        sub: 'um/un',
        poss: 'Possibilities: #[œ̃]#, #[ym]#, #[yn]#',
        rules: [
            {
                key: 1,
                cond: 'Final @um@/@un@, or @um@/@un@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[œ̃]# - the @m@/@n@ is NOT pronounced unless in liaison'
            }, {
                key: 2,
                cond: '@um@/@un@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[ym]#/#[yn]#'
            }
        ]
    }, {
        key: 53,
        primary: 'V',
        sub: null,
        poss: 'Possibilities: #[v]#',
        rules: [
            {
                key: 1,
                cond: '@v@',
                pron: '#[v]#'
            }
        ]
    }, {
        key: 54,
        primary: 'W',
        sub: null,
        poss: 'Possibilities: #[v]#',
        rules: [
            {
                key: 1,
                cond: '@w@',
                pron: 'Usually #[v]#'
            }
        ]
    }, {
        key: 55,
        primary: 'X',
        sub: null,
        poss: 'Possibilities: #[ks]#, #[gz]#, #[z]#, silent',
        rules: [
            {
                key: 1,
                cond: '@x@ + a consonant',
                pron: '#[ks]#'
            }, {
                key: 2,
                cond: '@x@ + @h@ or a vowel',
                pron: '#[gz]# (see exceptions below)'
            }, {
                key: 3,
                cond: '@x@ in @deuxieme@, @sixieme@, or @dixieme@',
                pron: '#[z]#'
            }, {
                key: 4,
                cond: 'Final @x@',
                pron: 'Silent'
            }, {
                key: 5,
                cond: '@x@ in liaison',
                pron: '#[z]#'
            }
        ]
    }, {
        key: 56,
        primary: 'Y',
        sub: 'y',
        poss: 'Possibilities: #[j]#, #[i]#',
        rules: [
            {
                key: 1,
                cond: 'Initial @y@',
                pron: '#[j]#'
            }, {
                key: 2,
                cond: '@y@ before or after a consonant',
                pron: '#[i]#'
            }, {
                key: 3,
                cond: 'Intervocalic @y@',
                pron: 'Treated as @ii@. Treat preceding vowel as if it was in combination with @i@, then begin second syllable with #[j]#. Example: @foyer@ = @foi-ier@. #[fwa ˈje]#'
            }
        ]
    }, {
        key: 57,
        primary: 'Y',
        sub: 'ym/yn',
        poss: 'Possibilities: #[ɛ̃]#, #[im]#, #[in]#',
        rules: [
            {
                key: 1,
                cond: 'Final @ym@/@yn@, or @ym@/@yn@ + another consonant that is not @m@, @n@, or @h@',
                pron: '#[ɛ̃]# - the @m@/@n@ is NOT pronounced unless in liaison'
            }, {
                key: 2,
                cond: '@ym@/@yn@ + a vowel, another @m@ or @n@, or an @h@',
                pron: '#[im]#/#[in]#'
            }
        ]
    }, {
        key: 58,
        primary: 'Z',
        sub: null,
        poss: 'Possibilities: #[z]#, silent',
        rules: [
            {
                key: 1,
                cond: 'Initial or interior @z@, or @z@ in liaison',
                pron: '#[z]#'
            }, {
                key: 2,
                cond: 'Final @z@ not in liaison',
                pron: 'Silent'
            }
        ]
    }
]

export default frenchRules