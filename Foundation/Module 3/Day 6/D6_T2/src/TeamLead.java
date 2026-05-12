public class TeamLead extends Developer {
	int teamSize;

	TeamLead(String name, int id, String role, int teamSize) {
		super(name, id, role);
		this.teamSize = teamSize;
	}

	@Override
	void work() {
		System.out.println(name + " (ID: " + id + ") is managing a team of " + teamSize + " " + role + "(s)");
	}
}
