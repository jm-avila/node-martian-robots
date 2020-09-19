## Script Basic Requirements

### Grid

- rectangular cartesian coordinate plane with size lower limit (0,0) and upper limit (x <= 50, y <= 50).
- The upper limit is set by the user input first line.

### Robot Positions

- grid coordinate (x, y)
- orientation: N, S, E, W

### Robot Displacement

#### Change in orientation

- L = left 90 degrees
- R = right 90 degrees
- F = forward 1 in the orientation direction

#### Orientation change according to previous orientation

- N + left = W
- N + right = E
- S + left = E
- S + right = W
- E + left = N
- E + right = S
- W + left = S
- W + right = N

#### Coordinate displacement according to the Orientation

- N = x + 1
- S = x - 1
- E = y + 1
- W = y - 1

#### Grid Limits

- N : x = input
- S : x = 0
- E : y = input
- W : y = 0

### Input

- First input = upper-right limit
- After that Robot commands come in pairs:
  - line 1 = initial coordinates and orientation
  - line 2 = instruction

### Output

Current robot position
