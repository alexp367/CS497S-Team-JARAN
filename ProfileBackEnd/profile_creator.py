
from dummy_data import DummyDataModel
import pprint


class ProfileCreator(DummyDataModel):
    def get_random_profile(self):
        return self.random_profile()


Tester = ProfileCreator()
Tester.get_random_profiles()