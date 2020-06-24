//The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
/*Complete the utopianTree function in the editor below. It should return the integer height of the tree after the input number of growth cycles.
utopianTree has the following parameter(s):
n: an integer, the number of growth cycles to simulate*/

function utopianTree(n) {
    let treeTopia = 1
    let i = 1
    let summer = false
    while (i <= n) {
        if (summer == true) {
            treeTopia += 1
            summer = false
        } else {
            treeTopia = treeTopia * 2
            summer = true
        }
        i++
    }
    return treeTopia
}