function generatePattern(N, T) {
    if (N < 1 || N > 26) {
        console.log('N must be between 1 and 26');
        return;
    }

    if (T !== 'a' && T !== '1') {
        console.log('T must be either "a" or "1"');
        return;
    }

    // Generate character pattern
    if (T === 'a') {
        const charCodeA = 'A'.charCodeAt(0);
        for (let i = 0; i < N; i++) {
            let row = '';
            for (let j = 0; j < N; j++) {
                if (i === 0 || i === N - 1) {
                    row += String.fromCharCode(charCodeA + j) + ' ';
                } else if (j === 0 || j === N - 1) {
                    row += String.fromCharCode(charCodeA + i) + ' ';
                } else {
                    row += '  ';
                }
            }
            console.log(row.trim());
        }
    }

    // Generate number pattern
    if (T === '1') {
        for (let i = 1; i <= N; i++) {
            let row = '';
            for (let j = 1; j <= N; j++) {
                if (i === 1 || i === N) {
                    row += j + ' ';
                } else if (j === 1 || j === N) {
                    row += i + ' ';
                } else {
                    row += '  ';
                }
            }
            console.log(row.trim());
        }
    }
}

// Example usage:
generatePattern(5, 'a');
console.log('\n');
generatePattern(7, '1');
