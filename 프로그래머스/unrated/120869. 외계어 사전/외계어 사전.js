function solution(spell, dic) {
    const arr = dic.filter((v) => {
        return v.split('').sort().join('') == spell.sort().join('')
    })
    return arr.length ? 1 : 2
    
}