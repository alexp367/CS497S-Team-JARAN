
from dummy_data import DummyDataModel


class ProfileCreator(DummyDataModel):
    def run(self):
        for i in range(1, 10):
            self.random_profile()
        return

Tester = ProfileCreator()
Tester.run()