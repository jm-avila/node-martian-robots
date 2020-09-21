# Martian Robots

Martian Robots is a RESTful API that exposes a couple of endpoint so you can interact with the Martian Robots Algorithm. With it you will be able to give a grid size, and some instructions so our robots explore the grid. We save all result to give you access to our robots explorations logs.

# Quickstart guide

Using Postman or your prefered client, interact with our API by using the (Available endpoints)[#available-endpoints] listed below.

## Available endpoints

- Greetings message

  - https://node-martian-robots.herokuapp.com/
  - Method: GET

- Access Martian Robots Algorithm

  - Give us a grid size, a robot initial position and some instructions about where to move and turn. We will run it a let you whether the robot was lost by going outside of the grid and where they ended at.
  - https://node-martian-robots.herokuapp.com/instructions
  - Method: POST
  - Take a look at the [Valid Inputs List](#valid-inputs-list) and at a [Input snippets](#input-snippets)

- Access Martian Robots Logs

  - Get access to the total number of robots that have walked on Mars, how many have been lost and the they were lost at.
  - https://node-martian-robots.herokuapp.com/logs
  - Method: GET

### Valid Inputs List

- Orientations: [N, S, E, W]

  - N
    - stands for north and represents the top of the grid, or the direction where y axis increases.
  - S
    - stands for south and represents the bottom of the grid, or the direction where y axis decreases.
  - E
    - stands for east and represents the right of the grid, or the direction where x axis increases.
  - W
    - stands for west and represents the left of the grid, or the direction where x axis decreases.

- Instructions: [L, R, F]
  - turn:
    - L
      - rotates the robot 90 degrees left relative to its orientation.
    - R
      - rotates the robot 90 degrees right relative to its orientation.
  - move:
    - F
      - moves a robot forward one place relative to its orientation.

### Input Structure

line 1

- 5 3

The first line of input is the upper-right coordinates of the world.

line 2

- 1 1 E

line 3

- RFRFRFRF

One Robot was two lines, the first line is the position (x, y, o) and second line are the instructions a robot will follow.

### Input snippets

```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

#### Where:

### Example Response

```
1 1 E
3 3 N LOST
2 3 S
```

# Script Basic Requirements

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
