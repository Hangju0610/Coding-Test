function solution(s) {
    const a = s.split(' ')
    for (let i = 0; i < a.length; i++) {
        if (a[i].charAt(0) == /[0-9]/g || '') {
            a[i] = a[i].toLowerCase()
        } else {
            let first = a[i].charAt(0)
            let other = a[i].slice(1)
            a[i] = first.toUpperCase() + other.toLowerCase()
        }
        
    }
    return a.join(' ')
}