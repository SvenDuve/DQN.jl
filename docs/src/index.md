```@meta
CurrentModule = DQN
```

# DQN

Documentation for [DQN](https://github.com/SvenDuve/DQN.jl).

This implementation of DQN is based on the paper [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) by Mnih et al. (2013). It solves the following environments:

- [Acrobot](https://gymnasium.farama.org/environments/classic_control/acrobot/)
- [Lunar Lander](https://gymnasium.farama.org/environments/box2d/lunar_lander/)


## Installation

In the julia REPL, run

```julia
using Pkg
Pkg.add(url="https://github.com/SvenDuve/DQN.jl")
```

This package is not for general use. To be fully functional, it requires the following packages:

- [RLTypes](https://github.com/SvenDuve/RLTypes.jl)
- [Conda](https://github.com/JuliaPy/Conda.jl)
- [PyCall](https://github.com/JuliaPy/PyCall.jl)
- [Gymnasium](https://github.com/SvenDuve/Gymnasium), this is a slightly adapted version. The original package can be found [here](https://github.com/Farama-Foundation/Gymnasium)


Run the following:

```julia
using Pkg
Pkg.add(url="https://github.com/SvenDuve/RLTypes.jl")
Pkg.add("Conda")
Pkg.add("PyCall")
```

Then again within julia,

```julia
using Conda
using PyCall
Conda.pip("install", "git+https://github.com/SvenDuve/Gymnasium")
```


Bring package into scope with

```julia
using DQN
```

## Example usage


Once the above is installed, the following code can be used to train an agent:

```julia
using DQN
using RLTyes
agent(Acrobot(), AgentParameter(training_episodes=100, batch_size=128))
```

This function returns a data structure containing a trained agent. 


## Function Reference


```@index
```

```@autodocs
Modules = [DQN]
```
