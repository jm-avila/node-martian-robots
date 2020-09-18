## Script Basic Requirements

### Grid

- rectangular cartesian coordinate plane.
- given that the first input is upper-right coordinates the size will be determined by it but always within the range 0 <= coordinate <= 50.

### Robot Positions

- grid coordinate (x, y)
- orientation [N, S, E, W]

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
- W + left = S
- W + right = N
- E + left = N
- E + right = S

#### Coordinate displacement according to the Orientation

- N = x + 1
- S = x - 1
- W = y - 1
- E = y + 1

#### Grid Limits

- N : x = input
- S : x = 0
- W : y = 0
- E : y = input

### Input

- First input = upper-right limit
- After that Robot commands come in pairs:
  - line 1 = initial coordinates and orientation
  - line 2 = instruction

### Output

Current robot position
