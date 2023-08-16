var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = DQN","category":"page"},{"location":"#DQN","page":"Home","title":"DQN","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DQN.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This implementation of DQN is based on the paper Playing Atari with Deep Reinforcement Learning by Mnih et al. (2013). It solves the following environments:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Acrobot\nLunar Lander","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"In the julia REPL, run","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(url=\"https://github.com/SvenDuve/DQN.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package is not for general use. To be fully functional, it requires the following packages:","category":"page"},{"location":"","page":"Home","title":"Home","text":"RLTypes\nConda\nPyCall\nGymnasium, this is a slightly adapted version. The original package can be found here","category":"page"},{"location":"","page":"Home","title":"Home","text":"Run the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(url=\"https://github.com/SvenDuve/RLTypes.jl\")\nPkg.add(\"Conda\")\nPkg.add(\"PyCall\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then again within julia,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Conda\nusing PyCall\nConda.pip(\"install\", \"git+https://github.com/SvenDuve/Gymnasium\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Bring package into scope with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DQN","category":"page"},{"location":"#Example-usage","page":"Home","title":"Example usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Once the above is installed, the following code can be used to train an agent:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DQN\nusing RLTyes\nagent(Acrobot(), AgentParameter(training_episodes=100, batch_size=128))","category":"page"},{"location":"","page":"Home","title":"Home","text":"This function returns a data structure containing a trained agent. ","category":"page"},{"location":"#Function-Reference","page":"Home","title":"Function Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DQN]","category":"page"},{"location":"#DQN.agent-Tuple{RLTypes.DiscreteEnvironment, RLTypes.AgentParameter}","page":"Home","title":"DQN.agent","text":"agent(environment::DiscreteEnvironment, agentParams::AgentParameter)\n\nTrain the agent in the given environment with the given parameters.\n\n\n\n\n\n","category":"method"},{"location":"#DQN.renderEnv","page":"Home","title":"DQN.renderEnv","text":"renderEnv(environment::DiscreteEnvironment, policy, seed=42)\n\nRenders a discrete environment with the given policy.\n\n\n\n\n\n","category":"function"},{"location":"#DQN.set_greediness!-Tuple{RLTypes.AgentParameter, Int64}","page":"Home","title":"DQN.set_greediness!","text":"set_greediness!(aP::AgentParameter, step_counter::Int64)\n\nSet the greediness of the agent.\n\n\n\n\n\n","category":"method"},{"location":"#DQN.set_q_function-Tuple{Any, Any}","page":"Home","title":"DQN.set_q_function","text":"set_q_function(state_size, action_size)\n\nCreate a Q-function with the given state and action size.\n\n\n\n\n\n","category":"method"},{"location":"#DQN.train_step!-Tuple{Any, Any, Any, Any, Any, Any, Any, Any, RLTypes.Parameter, RLTypes.EnvParameter}","page":"Home","title":"DQN.train_step!","text":"train_step!(S, A, R, S´, T, Qϕ, Qϕ´, opt_critic, ap::Parameter, ep::EnvParameter)\n\nTrain the critic network with gradient descent.\n\n\n\n\n\n","category":"method"},{"location":"#DQN.ϵ_greedy-Tuple{Any, Any, RLTypes.AgentParameter, RLTypes.EnvParameter}","page":"Home","title":"DQN.ϵ_greedy","text":"ϵ_greedy(Qϕ, s, aP::AgentParameter, eP::EnvParameter)\n\nReturn the action to take based on the Q-function and the current state.\n\n\n\n\n\n","category":"method"}]
}
